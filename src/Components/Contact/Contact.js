import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_omtw20j",
        "template_szdqwbn",
        form.current,
        "em4Mkgp4vhRuOsTMo"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs text-[#4ade80]/50 uppercase tracking-widest mb-3">
            Let's talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Contact</h2>
          <p className="text-white/50 text-base leading-relaxed max-w-sm">
            I'd love to hear about your project and how I could help. Fill in
            the form and I'll get back to you as soon as possible.
          </p>

          {/* Contact detail */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://github.com/FarhanZizz/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors group"
            >
              <span className="w-8 h-8 rounded-md bg-white/5 border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 25 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
                </svg>
              </span>
              github.com/FarhanZizz
            </a>
            <a
              href="https://linkedin.com/in/farhan-zizz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors group"
            >
              <span className="w-8 h-8 rounded-md bg-white/5 border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 25 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" />
                </svg>
              </span>
              linkedin.com/in/farhan-zizz
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/30 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#4ade80]/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/30 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#4ade80]/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/30 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#4ade80]/40 transition-colors resize-none"
            />
          </div>

          <div className="flex items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="text-sm font-semibold bg-[#4ade80] text-[#0d0d0d] px-6 py-2.5 rounded-md hover:bg-[#22c55e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <span className="text-sm text-[#4ade80]">
                Message sent successfully!
              </span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-400">
                Something went wrong. Try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
