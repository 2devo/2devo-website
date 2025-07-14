import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Zap,
  Globe,
  Target,
  BarChart3,
  Palette,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      category: "Reklam Yönetimi",
      icon: TrendingUp,
      description: "Dijital reklam kampanyalarınızı profesyonel şekilde yönetiyoruz",
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          title: "Meta Reklam Yönetimi",
          description: "Facebook ve Instagram reklamlarınızı optimize ederek ROI'nizi maksimize ediyoruz",
          features: [
            "Hedef kitle analizi ve segmentasyonu",
            "Kreatif tasarım ve metin optimizasyonu",
            "A/B test yönetimi",
            "Detaylı performans raporlama",
            "Bütçe optimizasyonu",
          ],
          icon: Target,
        },
        {
          title: "Google Reklam Yönetimi",
          description: "Google Ads kampanyalarınızla doğru müşterilere ulaşın",
          features: [
            "Anahtar kelime araştırması",
            "Reklam metni optimizasyonu",
            "Landing page uyumluluğu",
            "Conversion tracking",
            "Rekabet analizi",
          ],
          icon: BarChart3,
        },
      ],
    },
    {
      category: "Sosyal Medya Çözümleri",
      icon: Users,
      description: "Sosyal medya varlığınızı güçlendirin ve topluluk oluşturun",
      color: "from-purple-500 to-pink-500",
      services: [
        {
          title: "Sosyal Medya Danışmanlığı",
          description: "Marka stratejinizi sosyal medyada doğru şekilde konumlandırın",
          features: [
            "Sosyal medya stratejisi geliştirme",
            "Platform seçimi ve optimizasyonu",
            "İçerik takvimi oluşturma",
            "Influencer işbirlikleri",
            "Kriz yönetimi",
          ],
          icon: Users,
        },
        {
          title: "Sosyal Medya Yönetimi",
          description: "Sosyal medya hesaplarınızı profesyonel şekilde yönetiyoruz",
          features: [
            "Günlük içerik paylaşımı",
            "Community management",
            "Hashtag stratejisi",
            "Engagement artırma",
            "Analitik raporlama",
          ],
          icon: Smartphone,
        },
      ],
    },
    {
      category: "Tasarım Çözümleri",
      icon: Zap,
      description: "Markanızı görsel olarak güçlendirin ve fark yaratın",
      color: "from-orange-500 to-red-500",
      services: [
        {
          title: "Sosyal Medya Tasarımı",
          description: "Sosyal medya platformlarınız için etkileyici görseller",
          features: [
            "Post tasarımları",
            "Story tasarımları",
            "Reel kapakları",
            "Highlight kapakları",
            "Reklam kreatifları",
          ],
          icon: Palette,
        },
        {
          title: "Kurumsal Kimlik Tasarımı",
          description: "Markanızın görsel kimliğini oluşturun",
          features: [
            "Logo tasarımı",
            "Kurumsal renk paleti",
            "Tipografi seçimi",
            "Kartvizit tasarımı",
            "Marka kılavuzu",
          ],
          icon: Zap,
        },
      ],
    },
    {
      category: "Web Site Çözümleri",
      icon: Globe,
      description: "Modern ve etkili web siteleri ile dijital varlığınızı güçlendirin",
      color: "from-green-500 to-emerald-500",
      services: [
        {
          title: "Kurumsal Web Sitesi",
          description: "Markanızı en iyi şekilde temsil eden web siteleri",
          features: [
            "Responsive tasarım",
            "SEO optimizasyonu",
            "Hızlı yükleme",
            "Güvenlik sertifikası",
            "İçerik yönetim sistemi",
          ],
          icon: Globe,
        },
        {
          title: "E-ticaret Çözümleri",
          description: "Online satış yapabileceğiniz profesyonel e-ticaret siteleri",
          features: [
            "Ürün katalog yönetimi",
            "Ödeme sistemi entegrasyonu",
            "Kargo entegrasyonu",
            "Stok takibi",
            "Müşteri paneli",
          ],
          icon: TrendingUp,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Hizmetlerimiz</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Dijital Büyüme
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Çözümlerimiz
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Markanızın dijital dünyada başarılı olması için ihtiyacınız olan tüm hizmetleri profesyonel ekibimizle
              sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="text-center mb-16">
              <div
                className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">{category.category}</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">{category.description}</p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    </div>
                    <p className="text-slate-400 text-lg">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Hangi Hizmete İhtiyacınız Var?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Size en uygun çözümü birlikte belirleyelim ve projenizi hayata geçirelim
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Link href="/contact" className="flex items-center gap-2">
                    Ücretsiz Danışmanlık
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 bg-transparent"
                >
                  <Link href="/callback">Sizi Arayalım</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
