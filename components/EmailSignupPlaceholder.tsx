export function EmailSignupPlaceholder() {
  return (
    <form className="panel grid gap-3 rounded-lg p-4 sm:grid-cols-[1fr_auto] sm:p-5">
      {/* Connect this form to Mailchimp, ConvertKit, Buttondown, or another free email tool later. */}
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        className="min-h-12 rounded-full border border-white/10 bg-black/30 px-5 text-[#fff8ef] placeholder:text-[#f2e4d0]/45"
        id="email"
        name="email"
        placeholder="Email for updates"
        type="email"
      />
      <button className="button-primary" type="button">
        Join List
      </button>
    </form>
  );
}
