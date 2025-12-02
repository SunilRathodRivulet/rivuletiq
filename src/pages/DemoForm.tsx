import { useState } from 'react';
import PageHero from '../components/shared/PageHero';

export default function DemoForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!name.trim()) e.name = 'Name is required.';
    if (!email.trim()) e.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Invalid email.';
    if (!message.trim()) e.message = 'Message is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    // for demo purposes we just keep data in state and reset form fields
    setTimeout(() => {
      // keep submitted visible for a short time
      setName('');
      setEmail('');
      setMessage('');
    }, 500);
  };

  return (
    <>
      <PageHero
        headline="Demo Form"
        subhead="A small demo page for quick form testing"
      />

      <div className="pt-12 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium mb-2 text-white">Name</label>
                <input
                  id="demo-name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none text-white"
                  placeholder="Jane Doe"
                />
                {errors.name && <div className="text-xs text-rose-400 mt-1">{errors.name}</div>}
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-sm font-medium mb-2 text-white">Email</label>
                <input
                  id="demo-email"
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none text-white"
                  placeholder="you@company.com"
                />
                {errors.email && <div className="text-xs text-rose-400 mt-1">{errors.email}</div>}
              </div>

              <div>
                <label htmlFor="demo-message" className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea
                  id="demo-message"
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-vivid-orange focus:outline-none text-white resize-none"
                  rows={5}
                  placeholder="Type something to test the demo..."
                />
                {errors.message && <div className="text-xs text-rose-400 mt-1">{errors.message}</div>}
              </div>

              <div className="flex items-center justify-between gap-4">
                <button type="submit" className="btn-primary px-4 py-2">Submit</button>

                <div className="text-sm text-neutral-400">
                  {submitted ? (
                    <span className="text-green-400">Form submitted! (demo only)</span>
                  ) : (
                    <span>Demo: submission stays in the browser</span>
                  )}
                </div>
              </div>
            </form>

            {/* preview section */}
            {submitted && (
              <div className="mt-6 bg-white/5 p-4 rounded-lg text-sm text-neutral-200">
                <div className="font-semibold text-sm mb-2">Last submission (preview)</div>
                <div className="space-y-1 text-xs">
                  <div><strong>Name:</strong> {name || '(cleared)'}</div>
                  <div><strong>Email:</strong> {email || '(cleared)'}</div>
                  <div><strong>Message:</strong> {message || '(cleared)'}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
