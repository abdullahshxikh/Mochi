"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="legal-page">
      <div className="container">
        <Link href="/" style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
        <div className="legal-card shadow-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Contact Us</h1>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
            Have questions or feedback? We&apos;d love to hear from you. 
            Fill out the form below and our team will get back to you.
          </p>
          
          {submitted ? (
            <div style={{ 
              background: 'rgba(157, 128, 255, 0.1)', 
              border: '1px solid var(--accent-primary)', 
              padding: '2rem', 
              borderRadius: '1rem', 
              textAlign: 'center' 
            }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Message Sent!</h2>
              <p style={{ opacity: 0.8 }}>Thank you for reaching out. We&apos;ll be in touch soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-primary"
                style={{ marginTop: '1.5rem', border: 'none', cursor: 'pointer' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '0.75rem', 
                    padding: '1rem', 
                    color: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="your@email.com"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '0.75rem', 
                    padding: '1rem', 
                    color: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                <textarea 
                  required 
                  rows={5}
                  placeholder="How can we help?"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '0.75rem', 
                    padding: '1rem', 
                    color: 'white',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ border: 'none', cursor: 'pointer', padding: '1.25rem' }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
