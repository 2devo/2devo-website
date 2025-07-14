import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Kurucu & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ yıllık dijital pazarlama deneyimi ile 2devo Digital'i kurdu. Stratejik planlama ve iş geliştirme konularında uzman.",
      linkedin: "https://linkedin.com/in/ahmetyilmaz",
      email: "ahmet@2devo.com",
      expertise: ["Dijital Strateji", "İş Geliştirme", "Proje Yönetimi"],
    },
    {
      name: "Elif Kaya",
      position: "Kreatif Direktör",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Görsel tasarım ve marka kimliği konularında 8 yıllık deneyime sahip. Yaratıcı çözümler üretmeyi seviyor.",
      linkedin: "https://linkedin.com/in/elifkaya",
      email: "elif@2devo.com",
      expertise: ["Grafik Tasarım", "Marka Kimliği", "UI/UX Tasarım"],
    },
    {
      name: "Can Özdemir",
      position: "Dijital Pazarlama Uzmanı",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Google Ads ve Meta Ads sertifikalı uzman. Performans pazarlama ve veri analizi konularında deneyimli.",
      linkedin: "https://linkedin.com/in/canozdemir",
      email: "can@2devo.com",
      expertise: ["Google Ads", "Meta Ads", "Veri Analizi"],
    },
    {
      name: "Zeynep Demir",
      position: "Sosyal Medya Uzmanı",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sosyal medya stratejileri ve içerik üretimi konularında uzman. Topluluk yönetimi ve influencer pazarlama deneyimi.",
      linkedin: "https://linkedin.com/in/zeynepdemir",
      email: "zeynep@2devo.com",
      expertise: ["Sosyal Medya", "İçerik Üretimi", "Community Management"],
    },
    {
      name: "Murat Şahin",
      position: "Web Geliştirici",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack web geliştirici. Modern web teknolojileri ve e-ticaret platformları konularında uzman.",
      linkedin: "https://linkedin.com/in/muratsahin",
      email: "murat@2devo.com",
      expertise: ["React", "Next.js", "E-ticaret"],
    },
    {
      name: "Selin Arslan",
      position: "Müşteri İlişkileri Uzmanı",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Müşteri memnuniyeti ve proje koordinasyonu konularında deneyimli. İletişim ve problem çözme konularında uzman.",
      linkedin: "https://linkedin.com/in/selinarslan",
      email: "selin@2devo.com",
      expertise: ["Müşteri İlişkileri", "Proje Koordinasyonu", "İletişim"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Takımımız</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Uzman
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Ekibimiz
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Dijital pazarlama alanında uzman, deneyimli ve tutkulu ekibimizle tanışın. Her biri kendi alanında
              uzmanlaşmış profesyonellerden oluşan takımımız.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-blue-300 font-medium">{member.position}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-300 mb-4 leading-relaxed">{member.bio}</p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Uzmanlık Alanları</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent flex-1"
                        asChild
                      >
                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent flex-1"
                        asChild
                      >
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          E-posta
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Takım İstatistikleri</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
                <div className="text-slate-400">Takım Üyesi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">45+</div>
                <div className="text-slate-400">Toplam Deneyim Yılı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">12+</div>
                <div className="text-slate-400">Sertifika</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-slate-400">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Takım Değerlerimiz</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">🚀 İnovasyon</h3>
                  <p className="text-slate-300">
                    Sürekli öğrenmeyi ve yenilikçi çözümler üretmeyi benimseyen bir ekibiz. Teknolojideki gelişmeleri
                    yakından takip ederiz.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">🤝 İşbirliği</h3>
                  <p className="text-slate-300">
                    Takım ruhu ile çalışır, birbirimizin güçlü yanlarından faydalanarak en iyi sonuçları elde ederiz.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">🎯 Sonuç Odaklılık</h3>
                  <p className="text-slate-300">
                    Her projede ölçülebilir sonuçlar elde etmeyi hedefler, müşterilerimizin başarısı için çalışırız.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">💡 Yaratıcılık</h3>
                  <p className="text-slate-300">
                    Her projede özgün ve yaratıcı yaklaşımlar sergiler, markaları farklılaştıran çözümler üretiriz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
            <div className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Takımımızla Tanışmak İster misiniz?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Uzman ekibimizle projelerinizi konuşmak için bizimle iletişime geçin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Link href="/contact" className="flex items-center gap-2">
                    İletişime Geçin
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 bg-transparent"
                >
                  <Link href="/quick-appointment">Hızlı Randevu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
