import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, TrendingUp, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Sonuç Odaklı",
      description: "Her projede ölçülebilir sonuçlar elde etmeyi hedefliyoruz",
    },
    {
      icon: Users,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin başarısı bizim önceliğimizdir",
    },
    {
      icon: Award,
      title: "Kalite",
      description: "En yüksek kalite standartlarında hizmet sunuyoruz",
    },
    {
      icon: TrendingUp,
      title: "Sürekli Gelişim",
      description: "Teknolojideki gelişmeleri yakından takip ediyoruz",
    },
  ]

  const stats = [
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "100+", label: "Tamamlanan Proje" },
    { number: "3+", label: "Yıllık Deneyim" },
    { number: "24/7", label: "Destek Hizmeti" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Hakkımızda</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              2devo Digital
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Hikayesi
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Dijital dünyada markaların büyümesine katkıda bulunmak için kurulmuş, yenilikçi ve sonuç odaklı bir
              dijital ajansız
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 mb-16">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Misyonumuz</h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  2devo Digital olarak, işletmelerin dijital dünyada güçlü bir varlık oluşturmalarına yardımcı olmak
                  için kurulduk. Reklam yönetiminden web tasarımına, sosyal medya yönetiminden kurumsal kimlik
                  oluşturmaya kadar geniş bir hizmet yelpazesi sunarak, müşterilerimizin dijital büyüme hedeflerine
                  ulaşmalarını sağlıyoruz.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Deneyimli ekibimiz, her projeye özgün yaklaşımlar geliştirerek, markaların hedef kitlelerine en etkili
                  şekilde ulaşmalarını sağlar. Teknolojideki son gelişmeleri yakından takip ederek, müşterilerimize her
                  zaman güncel ve etkili çözümler sunmaya odaklanıyoruz.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Sakarya merkezli olmakla birlikte, Türkiye genelinde hizmet veren ajansımız, yerel anlayış ile global
                  standartları harmanlayarak, her ölçekteki işletmeye profesyonel dijital pazarlama hizmetleri
                  sunmaktadır.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Değerlerimiz</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <value.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                      <p className="text-slate-400">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white text-center mb-8">İletişim Bilgilerimiz</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Adres</h3>
                    <p className="text-slate-400">Sakarya, Türkiye</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Telefon</h3>
                    <p className="text-slate-400">0530 729 6759</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">E-posta</h3>
                    <p className="text-slate-400">info@2devo.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Birlikte Çalışmaya Hazır mısınız?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Dijital büyüme yolculuğunuzda size eşlik etmekten mutluluk duyarız
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
                  <Link href="/team">Takımımızı Tanıyın</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
