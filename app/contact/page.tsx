import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, Github, Youtube } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Sakarya, Türkiye",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "0530 729 6759",
      color: "text-green-400",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@2devo.com",
      color: "text-purple-400",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      color: "text-orange-400",
    },
  ]

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/2devodigital", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/2devodigital", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/2devodigital", icon: Linkedin },
    { name: "Facebook", href: "https://facebook.com/2devodigital", icon: Facebook },
    { name: "GitHub", href: "https://github.com/2devodigital", icon: Github },
    { name: "YouTube", href: "https://youtube.com/@2devodigital", icon: Youtube },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">İletişim</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Bizimle
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                İletişime Geçin
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Dijital büyüme yolculuğunuzda size nasıl yardımcı olabileceğimizi konuşalım
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Mesaj Gönderin</CardTitle>
              <p className="text-slate-400">Projeniz hakkında detayları paylaşın, size en kısa sürede dönüş yapalım</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">
                    Ad
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Adınız"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">
                    Soyad
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Soyadınız"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  E-posta
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@email.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-300">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  placeholder="0530 000 00 00"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-300">
                  Şirket
                </Label>
                <Input
                  id="company"
                  placeholder="Şirket adınız"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  Mesaj
                </Label>
                <Textarea
                  id="message"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Mesaj Gönder</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center ${info.color}`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      <p className="text-slate-400">{info.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Sosyal Medya</CardTitle>
                <p className="text-slate-400">Bizi sosyal medyada takip edin</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <social.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                      <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Hızlı İşlemler</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/callback">Sizi Arayalım</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                    asChild
                  >
                    <Link href="/quick-appointment">Hızlı Randevu</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
