import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ShoppingBag, Shirt, Baby, Handshake } from "lucide-react"
import Link from "next/link"

export default function ReferencesPage() {
  const references = [
    {
      category: "Çanta & Aksesuar",
      icon: ShoppingBag,
      color: "from-purple-500 to-pink-500",
      clients: [
        {
          name: "Miales Bags",
          description: "Çanta",
          website: "miales.com.tr",
          url: "https://miales.com.tr",
        },
        {
          name: "Aydanca",
          description: "Tasarım çanta",
          website: "aydancabags.com",
          url: "https://aydancabags.com",
        },
        {
          name: "Pinovas",
          description: "Aksesuar",
          website: "pinovas.com",
          url: "https://pinovas.com",
        },
        {
          name: "Tac-ı Serem",
          description: "Aksesuar",
          website: "taciserem.com",
          url: "https://taciserem.com",
        },
        {
          name: "Lissa Scarf",
          description: "Şal ve eşarp",
          website: "lissascarf.com",
          url: "https://lissascarf.com",
        },
      ],
    },
    {
      category: "Giyim & Moda",
      icon: Shirt,
      color: "from-blue-500 to-cyan-500",
      clients: [
        {
          name: "Mimossia",
          description: "Moda giyim",
          website: "mimossia.com",
          url: "https://mimossia.com",
        },
        {
          name: "Murpie",
          description: "Giyim",
          website: "murpie.com",
          url: "https://murpie.com",
        },
        {
          name: "Vinart",
          description: "Sokak modası ve kaykay stili",
          website: "vinart.com.tr",
          url: "https://vinart.com.tr",
        },
      ],
    },
    {
      category: "Çocuk & Bebek",
      icon: Baby,
      color: "from-green-500 to-emerald-500",
      clients: [
        {
          name: "Mud Marks",
          description: "Bebek ve çocuk kostümleri",
          website: "mudmarks.com",
          url: "https://mudmarks.com",
        },
        {
          name: "Zeynebim Kids Butik",
          description: "Çocuk giyim",
          website: "zeynebimkidsbutik.ikas.shop",
          url: "https://zeynebimkidsbutik.ikas.shop",
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
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Referanslarımız</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Başarı
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Hikayelerimiz
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Birlikte çalıştığımız markalar ve onlarla elde ettiğimiz başarılı sonuçlar
            </p>
          </div>
        </div>
      </section>

      {/* References by Category */}
      {references.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{category.category}</h2>
            </div>

            {/* Clients Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {category.clients.map((client, clientIndex) => (
                <Card
                  key={clientIndex}
                  className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {client.name}
                    </CardTitle>
                    <p className="text-slate-400">{client.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{client.website}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-600/20"
                        asChild
                      >
                        <Link href={client.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Business Partners Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">İş Ortaklarımız</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Güvenilir teknoloji partnerleri ile müşterilerimize en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">İKAS</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">İkas Partner</h3>
                <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                  Türkiye'nin önde gelen e-ticaret platformu İkas'ın resmi partneri olarak, müşterilerimize profesyonel
                  e-ticaret çözümleri sunuyoruz.
                </p>
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">Resmi Partner</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
            <div className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Siz de Başarı Hikayemizin Parçası Olun</h2>
              <p className="text-xl text-slate-300 mb-8">
                Markanızı dijital dünyada büyütmek için bizimle iletişime geçin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Link href="/contact">Projenizi Konuşalım</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 bg-transparent"
                >
                  <Link href="/callback">Ücretsiz Görüşme</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
