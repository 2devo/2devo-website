import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github, Youtube } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/2devodigital", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/2devodigital", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/2devodigital", icon: Linkedin },
    { name: "Facebook", href: "https://facebook.com/2devodigital", icon: Facebook },
    { name: "GitHub", href: "https://github.com/2devodigital", icon: Github },
    { name: "YouTube", href: "https://youtube.com/@2devodigital", icon: Youtube },
  ]

  const footerLinks = [
    {
      title: "Hizmetler",
      links: [
        { name: "Reklam Yönetimi", href: "/services#reklam-yonetimi" },
        { name: "Sosyal Medya", href: "/services#sosyal-medya" },
        { name: "Tasarım", href: "/services#tasarim" },
        { name: "Web Sitesi", href: "/services#web-sitesi" },
      ],
    },
    {
      title: "Şirket",
      links: [
        { name: "Hakkımızda", href: "/about" },
        { name: "Takım", href: "/team" },
        { name: "Referanslar", href: "/references" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Destek",
      links: [
        { name: "İletişim", href: "/contact" },
        { name: "S.S.S", href: "/faq" },
        { name: "Sizi Arayalım", href: "/callback" },
        { name: "Hızlı Randevu", href: "/quick-appointment" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { name: "Gizlilik Sözleşmesi", href: "/privacy" },
        { name: "Hizmet Sözleşmesi", href: "/terms-of-service" },
        { name: "Şartlar ve Koşullar", href: "/terms" },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">2D</span>
              </div>
              <span className="text-2xl font-bold text-white">2devo Digital</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Dijital dünyada markanızı büyütmek için ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz.
            </p>
            <div className="space-y-2 text-slate-400">
              <p>📍 Sakarya, Türkiye</p>
              <p>📧 info@2devo.com</p>
              <p>📞 0530 729 6759</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <p className="text-slate-400 text-sm">© 2024 2devo Digital. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
