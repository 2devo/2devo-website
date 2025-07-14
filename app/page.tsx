import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, TrendingUp, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      title: "Reklam Yönetimi",
      description: "Meta ve Google reklamlarınızı profesyonel şekilde yönetiyoruz",
      icon: TrendingUp,
      features: ["Meta Reklam Yönetimi", "Google Reklam Yönetimi"],
    },
    {
      title: "Sosyal Medya Çözümleri",
      description: "Sosyal medya varlığınızı güçlendirin",
      icon: Users,
      features: ["Sosyal Medya Danışmanlığı", "Sosyal Medya Yönetimi"],
    },
    {
      title: "Tasarım Çözümleri",
      description: "Markanızı görsel olarak güçlendirin",
      icon: Zap,
      features: ["Sosyal Medya Tasarımı", "Kurumsal Kimlik Tasarımı"],
    },
    {
      title: "Web Site Çözümleri",
      description: "Modern ve etkili web siteleri",
      icon: Globe,
      features: ["Responsive Tasarım", "E-ticaret Çözümleri"],
    },
  ]

  const testimonials = [
    {
      company: "Miales Bags",
      person: "Ahmet Yılmaz",
      position: "Pazarlama Müdürü",
      comment:
        "2devo Digital ile çalışmaya başladıktan sonra online satışlarımız %300 arttı. Profesyonel yaklaşımları ve sonuç odaklı çalışmaları bizi çok memnun etti.",
    },
    {
      company: "Mimossia",
      person: "Elif Kaya",
      position: "Kurucu",
      comment:
        "Sosyal medya yönetimi ve reklam kampanyalarında aldığımız hizmet mükemmeldi. Marka bilinirliğimiz kısa sürede ciddi oranda arttı.",
    },
    {
      company: "Vinart",
      person: "Can Özdemir",
      position: "CEO",
      comment:
        "Yaratıcı tasarımları ve etkili reklam stratejileri sayesinde hedef kitlemize çok daha kolay ulaşabiliyoruz. Kesinlikle tavsiye ederim.",
    },
  ]

  const stats = [
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "100+", label: "Tamamlanan Proje" },
    { number: "3+", label: "Yıllık Deneyim" },
    { number: "24/7", label: "Destek" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Digital Growth Partner</Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              2devo ile
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Digital Büyüme
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">Your Partner in Digital Growth</p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Dijital dünyada markanızı büyütmek için ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz. Reklam
              yönetiminden web tasarımına, sosyal medyadan kurumsal kimliğe kadar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Hemen Başlayalım
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/services">Hizmetlerimizi İnceleyin</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Hizmetlerimiz</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Dijital büyümeniz için ihtiyacınız olan tüm hizmetleri profesyonel ekibimizle sunuyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="/services" className="flex items-center gap-2">
                Tüm Hizmetleri Görün
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Müşteri Yorumları</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Birlikte çalıştığımız markalar hakkımızda ne düşünüyor?
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.person}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.position} - {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Projenizi Konuşalım</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Dijital büyüme yolculuğunuzda size nasıl yardımcı olabileceğimizi keşfedelim
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Link href="/contact">Ücretsiz Görüşme</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 bg-transparent"
                >
                  <Link href="/quick-appointment">Hızlı Randevu</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
