# PlaySchl API Documentation

## Base URL
`
http://localhost:4000/api/v1
`

## Authentication
All protected endpoints require a Bearer token in the Authorization header.

## Endpoints

### Auth
- `POST /auth/register` — Register a new user
- `POST /auth/login` — Login and get tokens
- `POST /auth/refresh` — Refresh access token
- `POST /auth/logout` — Logout (invalidate token)
- `GET /auth/me` — Get current user profile

### Students
- `GET /students` — List students (paginated)
- `GET /students/:id` — Get student by ID
- `POST /students` — Create student
- `PATCH /students/:id` — Update student
- `DELETE /students/:id` — Delete student

### Teachers
- `GET /teachers` — List teachers
- `GET /teachers/:id` — Get teacher by ID
- `POST /teachers` — Create teacher
- `PATCH /teachers/:id` — Update teacher

### Attendance
- `GET /attendance` — Get attendance records
- `POST /attendance` — Mark attendance
- `PATCH /attendance/:id` — Update attendance

### Timetable
- `GET /timetable` — Get timetable
- `POST /timetable` — Create timetable
- `PATCH /timetable/:id` — Update timetable

### Assignments
- `GET /assignments` — List assignments
- `GET /assignments/:id` — Get assignment
- `POST /assignments` — Create assignment
- `POST /assignments/:id/submit` — Submit assignment

### Exams
- `GET /exams` — List exams
- `POST /exams` — Create exam
- `POST /exams/:id/results` — Enter results

### Fees
- `GET /fees` — Fee structures
- `POST /fees/payments` — Record payment
- `GET /fees/report` — Fee reports

### Notifications
- `GET /notifications` — List notifications
- `POST /notifications` — Send notification
- `PATCH /notifications/:id/read` — Mark as read
