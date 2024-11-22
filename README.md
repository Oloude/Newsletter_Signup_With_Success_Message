# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [github](https://github.com)

### Built with

- Semantic HTML5 markup
- Tailwing
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) -extends JavaScript by adding types to the language.

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
type TProps = {
  handleToggle: () => void,
  onEmailChange: (value: string) => void,
};

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function SignUp({ handleToggle, onEmailChange }: TProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleEmail(value: string) {
    setEmail(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (email.trim() && regex.test(email)) {
      setError("");
      handleToggle();
      onEmailChange(email);
    } else {
      setError("Valid email required");
    }
  }

  return (
    <form action="" className="mb-6 flex flex-col" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3 mb-2">
        <label htmlFor="" className="text-xs font-semibold text-slateGrey">
          Email address{" "}
        </label>
        <span className="text-xs font-medium text-tomato self-end">
          {error}
        </span>
      </div>
      <input
        onChange={(e) => handleEmail(e.target.value)}
        value={email}
        type="email"
        name=""
        id=""
        placeholder="email@company.com"
        className={`${
          error
            ? "border-tomato bg-tomato bg-opacity-20 text-tomato placeholder:text-tomato"
            : ""
        }  text-grey border  border-gey rounded-md p-3 w-full outline-none mb-5 focus-within:border-charcoalGrey placeholder:text-grey  `}
      />
      <button className="bg-slateGrey p-3 rounded-md text-white font-medium text-base hover:bg-gradient-to-r hover:from-tomato hover:to-orange-600">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
```

## Author

- Frontend Mentor - [@oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
