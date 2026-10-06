# Mahid Wasif — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personalize

- Update profile, email, social, and resume URLs in `src/data/personal.js`.
- Add the portrait as `public/assets/profile.jpg`.
- Add project entries in `src/data/projects.js`; set `image`, `github`, and `live` for each project.
- Replace the experience and education placeholders in their components with confirmed details.
- Add the resume as `public/resume.pdf`.

The contact form currently validates its fields in the browser and displays a note. It does not send or store messages until an email service is connected.
