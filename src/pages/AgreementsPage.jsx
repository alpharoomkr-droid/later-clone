const SECTIONS = [
  {
    title: 'Enterprise Software-as-a-Service Agreement',
    links: [
      {
        label: 'Enterprise Software-as-a-Service Agreement',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/4oCovUkSW4MrN7aBY8gJDF/fdb8551cb4782da2287fda91b1cd6d83/Enterprise_Software-as-a-Service_Agreement.pdf',
      },
    ],
  },
  {
    title: 'Later Social Software-as-a-Service Addendum',
    links: [
      {
        label: 'Later Social Software-as-a-Service Addendum',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/31EE9TaZHoMZln30jo7g3S/038f56a39476cd14dbf30a3d8c3d5440/Later_Social_Software-as-a-Service_Addendum.pdf',
      },
    ],
  },
  {
    title: 'Software-as-a-Service Agreement (Brand)',
    links: [
      {
        label: 'Software-as-a-Service Agreement (Brand) — Last Update February 1, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/6EPzmcoWV8r9hsMeF3J764/8fa0d9043c2f003e42fe122b8d500787/Software-as-a-Service_Agreement__Brand__-_Last_Update_February_1__2024.pdf',
      },
      {
        label: 'Software-as-a-Service Agreement (Brand) — Last Update 3-20-2023',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/XdBg0eM1CY789HlFjldeb/3fc43644ae745dc0acfb8f015d8353de/Software-As-A-Service_Agreement__Brand__-_Last_Update_3-20-2023.pdf',
      },
    ],
  },
  {
    title: 'Software-as-a-Service Agreement (Agency)',
    links: [
      {
        label: 'Software-as-a-Service Agreement (Agency) — Last Update February 1, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/eoTLQpc6zaWg9YD67CrTG/440a90434753da58a835e8367e1f7029/Software-as-a-Service_Agreement__Agency__-_Last_Update_February_1__2024.pdf',
      },
      {
        label: 'Software-as-a-Service Agreement (Agency) — Last Update 1-20-2022',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/2Hwf0tGZLGcE39GwmLLutJ/f427425cec543d38294d287c05afa2a7/Software-As-A-Service_Agreement__Agency__-_Last_Update_1-20-2022.pdf',
      },
    ],
  },
  {
    title: 'Services Descriptions',
    links: [
      {
        label: 'Licence Support Services Description — Last Update August 7, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/1TDy3EBQ3TzJeBuvuCFTd0/6ee0e8a5ee7274f60d94217d03af03be/Licence_Support_Services_Description_-_Last_Update_August_7__2024.pdf',
      },
      {
        label: 'Licence Support Services Description — Last Update February 1, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/p85TsGEEzyloK1Bqi5nP2/557816fb3f5ce72287582b2bf72e25bf/Licence_Support_Services_Description_-_Last_Update_February_1__2024.pdf',
      },
      {
        label: 'Licence Support Services Description (SSD) — Last Update 6-4-2019',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/3gXSASJDZCVvdWQmkT64SR/ecacf034f7c9a1157578bacda5eff49e/Licence_Support_Services_Description__SSD__-_Last_Update_6-4-2019.pdf',
      },
    ],
  },
  {
    title: 'Service Level Agreement',
    links: [
      {
        label: 'Software Service Level Agreement (SLA)',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/SFAmwxhh5Mex9p0uvg29h/ddca7f385b2e28b28fd742418e79df01/Software_Service_Level_Agreement__SLA____1_.pdf',
      },
    ],
  },
  {
    title: 'Campaign Services Agreement',
    links: [
      {
        label: 'Campaign Services Agreement — Last Update October 6, 2025',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/71YdwZvA9vhZOEeX6PiZQ2/aa1b48af2f8967ce14dec3dc093b0bb6/-WEB-_Campaign_Services_Agreement__October_6_2025_.docx.pdf',
      },
      {
        label: 'Campaign Services Agreement — Last Update February 25, 2025',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/77Jq1gSUVjmgoOYwCPB7SY/6a0b166a0e3955903990d6e27d6fd272/-WEB-_Campaign_Services_Agreement__2025_Mavely___Later_AIC_.docx.pdf',
      },
      {
        label: 'Campaign Services Agreement — Last Update March 27, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/2Ikc2occG9VH3Qp44mqYvk/ec156f2894c595b8ec36bcfc3c473de2/Campaign_Services_Agreement_-_Last_Update_March_27__2024.docx.pdf',
      },
      {
        label: 'Campaign Services Agreement — Last Update February 1, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/2QP1y6aiLRCcwV9SoYSozS/d9a31af5dbe18a30189ec4cfc7fd81ac/Campaign_Services_Agreement_-_Last_Update_February_1__2024.pdf',
      },
    ],
  },
  {
    title: 'Campaign Services Description',
    links: [
      {
        label: 'Campaign Services Description — Last Updated February 1, 2024',
        url: 'https://assets.ctfassets.net/nfpsrlop6sws/2m9ZvDzztVp7XpuDG2kTqs/14585f5cc759dcd8d733d1e3f33614a8/Campaign_Services_Description_-_Last_Update_February_1__2024.pdf',
      },
    ],
  },
]

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block mr-2 shrink-0 -translate-y-px"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

export default function AgreementsPage() {
  return (
    <div className="min-h-screen bg-page-bg" style={{ paddingTop: 70 }}>
      {/* Page header */}
      <section className="reveal" style={{ padding: '80px 0 40px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h1
            className="ff-heading text-charcoal reveal"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1, fontWeight: 700 }}
          >
            Agreements
          </h1>
        </div>
      </section>

      {/* Agreement sections */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[900px] mx-auto">
            {SECTIONS.map((section, idx) => (
              <div key={section.title} className="reveal" style={{ transitionDelay: `${idx * 60}ms` }}>
                <div style={{ padding: '36px 0' }} className={idx < SECTIONS.length - 1 ? 'border-b border-charcoal/10' : ''}>
                  <h2
                    className="ff-heading text-charcoal"
                    style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.3, fontWeight: 700, marginBottom: 16 }}
                  >
                    {section.title}
                  </h2>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {section.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gridglow hover:text-gridglow/70 transition-colors"
                          style={{ fontSize: 16, lineHeight: 1.6, fontWeight: 400, display: 'inline-flex', alignItems: 'baseline' }}
                        >
                          <PdfIcon />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Back to top */}
          <div className="reveal" style={{ marginTop: 48 }}>
            <a
              href="#root"
              className="text-charcoal/50 hover:text-charcoal transition-colors"
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
