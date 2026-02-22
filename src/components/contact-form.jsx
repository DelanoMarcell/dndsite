'use client';

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" />
      </div>
      <div>
        <label htmlFor="service">Service needed</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="strategy">AI Consulting & Strategy</option>
          <option value="ai">Generative AI & Agents</option>
          <option value="software">Software Development</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Project brief</label>
        <textarea id="message" name="message" rows="6" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit enquiry
      </button>
    </form>
  );
}
