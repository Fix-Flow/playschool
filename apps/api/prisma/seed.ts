/**
 * Database Seed Script
 *
 * Populates the database with initial data for development:
 * - Default admin user
 * - Sample school
 * - Sample academic year, classes, sections, subjects
 */

import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create default school
  const school = await prisma.school.upsert({
    where: { code: 'PLAY001' },
    update: {},
    create: {
      name: 'PlaySchl Demo School',
      code: 'PLAY001',
      address: '123 Education Street',
      email: 'admin@playschl.com',
      phone: '+1234567890',
    },
  });

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin@123', 12);
  await prisma.user.upsert({
    where: { email: 'admin@playschl.com' },
    update: {},
    create: {
      email: 'admin@playschl.com',
      password: hashedPassword,
      firstName: 'Super',
      lastName: 'Admin',
      role: UserRole.ADMIN,
      schoolId: school.id,
    },
  });

  // Create academic year
  await prisma.academicYear.create({
    data: {
      name: '2024-2025',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2025-05-31'),
      isCurrent: true,
      schoolId: school.id,
    },
  });

  // Create classes
  const classNames = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];

  for (let i = 0; i < classNames.length; i++) {
    const cls = await prisma.class.create({
      data: {
        name: classNames[i],
        grade: i + 1,
        schoolId: school.id,
      },
    });

    // Create sections A, B for each class
    await prisma.section.createMany({
      data: [
        { name: 'A', classId: cls.id },
        { name: 'B', classId: cls.id },
      ],
    });
  }

  // Create subjects
  const subjects = [
    { name: 'Mathematics', code: 'MATH' },
    { name: 'English', code: 'ENG' },
    { name: 'Science', code: 'SCI' },
    { name: 'Social Studies', code: 'SST' },
    { name: 'Hindi', code: 'HIN' },
    { name: 'Computer Science', code: 'CS' },
    { name: 'Physical Education', code: 'PE' },
    { name: 'Art', code: 'ART' },
  ];

  await prisma.subject.createMany({
    data: subjects.map((s) => ({ ...s, schoolId: school.id })),
  });

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
