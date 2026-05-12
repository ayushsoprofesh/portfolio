import React from "react";

export default function MinimalFooter() {
  return (
    <footer style={{ marginTop: '120px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px', width: '100%' }}>
      <div className="pageend" style={{ margin: 0 }}>— let's build something —</div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', fontSize: '17px', fontFamily: 'var(--body-font)', paddingTop: '20px', borderTop: '1px solid var(--rule)' }}>
        
        <a href="mailto:ayush.singh451@gmail.com" style={{ color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Email
        </a>
        
        <a href="tel:+917357442395" style={{ color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Phone
        </a>
        
        <a href="https://www.linkedin.com/in/ayush-singh-5065881a1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
        
        <a href="https://www.behance.net/ayushsingh83" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.918 2.338-5.325 5.462-5.325 3.314 0 5.405 1.874 5.405 5.396h-7.686c.098 1.988 1.385 2.508 2.923 2.508 1.51 0 2.309-.654 2.755-1.904h1.806zm-8.422-3.813h5.691c-.344-1.583-1.228-2.281-2.827-2.281-1.625 0-2.613.72-2.864 2.281zM5.72 14v-9h-5.72v15h5.863c3.214 0 5.924-1.22 5.924-5.432 0-3.08-1.729-4.228-3.417-4.514 1.382-.462 2.651-1.722 2.651-4.108 0-3.64-2.845-4.946-5.421-4.946h-5.58v13zm-2.86-5.39v-4.78h2.64c1.472 0 2.453.416 2.453 2.401 0 1.942-1.01 2.379-2.433 2.379h-2.66zm0 5.39v-4.93h2.894c1.589 0 2.686.442 2.686 2.459 0 2.05-1.125 2.471-2.741 2.471h-2.839z"/>
          </svg>
          Behance
        </a>
      </div>
    </footer>
  );
}
