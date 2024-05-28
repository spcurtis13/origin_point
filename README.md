# Origin Point Career Strategy

This is an online database for finding mentors. This is primarily meant for liberal arts students but can be used by all majors for finding a mentor. Mentorship is critical
for people from non-traditional backgrounds trying to get business jobs. This is especially true for liberal arts students becasue their educational experience provides
them with lots of skills but they need to use business vernacular to express those skills. A mentor can help students with this disconnect as well as give them guidance 
elsewhere in their eductational journey.

To use this application click on the sign-in in the uppper right hand corner of the landing page and use your Linkedin profile to login.

These are the techologies used in this project:


- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com/)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Vercel](https://vercel.com/)


Once logged in create a profile and specify whether you are a student or a mentor. Once you have created your profile you can click students or mentors and search for people who are 
in the role and industry.

We wish you the best using our plaform.



# API Documentation

Base URL for API endpoints is 'api/mentor' or 'api/student'

Endpoints

Endpoint: POST /create

Input:

    {
    "email": "string (valid email format)",
    "firstName": "string (minimum 1 character)",
    "lastName": "string (minimum 1 character)",
    "industry": "string (minimum 1 character)",
    "role": "string (minimum 1 character)",
    "available": "boolean"
    }