import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Clock, CreditCard, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      icon: Zap,
      title: "Hizmetler Hakkında",
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "Hangi dijital pazarlama hizmetlerini sunuyorsunuz?",
          answer:
            "Reklam yönetimi (Google Ads, Meta Ads), sosyal medya yönetimi, web sitesi tasarımı, kurumsal kimlik tasarımı, SEO ve dijital analiz hizmetleri sunuyoruz. Her hizmet için detaylı bilgiyi Hizmetlerimiz sayfasından alabilirsiniz.",
        },
        {
          question: "Hangi sektörlerde çalışıyorsunuz?",
          answer:
            "E-ticaret, moda, aksesuar, çocuk ürünleri, hizmet sektörü başta olmak üzere tüm sektörlerde hizmet veriyoruz. Özellikle KOBİ'lere odaklanarak büyüme stratejileri geliştiriyoruz.",
        },
        {
          question: "Proje süresi ne kadar?",
          answer:
            "Proje türüne göre değişir. Web sitesi projeleri 2-4 hafta, kurumsal kimlik çalışmaları 1-2 hafta, reklam kampanyaları ise sürekli optimizasyon ile yürütülür. Detaylı takvim proje başlangıcında paylaşılır.",
        },
        {
          question: "Revizyon hakkım var mı?",
          answer:
            "Evet, her projede 3 ana revizyon hakkınız bulunur. Ek revizyon talepleri proje kapsamına göre değerlendirilir ve gerekirse ek ücretlendirme yapılır.",
        },
      ],
    },
    {
      icon: CreditCard,
      title: "Ödeme ve Fiyatlandırma",
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "Ödeme koşullarınız nedir?",
          answer:
            "Proje başlangıcında %50 avans, proje tesliminde kalan %50 ödeme alınır. Aylık hizmetlerde ödeme ayın ilk haftasında yapılır. Banka havalesi veya kredi kartı ile ödeme yapabilirsiniz.",
        },
        {
          question: "Fiyatlarınız nasıl belirleniyor?",
          answer:
            "Fiyatlar proje kapsamı, süre ve karmaşıklığa göre belirlenir. Her müşteri için özel teklif hazırlanır. Ücretsiz görüşme sonrası detaylı fiyat teklifi sunulur.",
        },
        {
          question: "Aylık paketleriniz var mı?",
          answer:
            "Evet, sosyal medya yönetimi ve reklam yönetimi için aylık paketlerimiz bulunur. Paket içerikleri ve fiyatları için iletişime geçebilirsiniz.",
        },
        {
          question: "İptal durumunda iade alabilir miyim?",
          answer:
            "Proje başlangıcından itibaren 7 gün içinde iptal hakkınız vardır. Yapılan çalışma karşılığında kısmi ödeme düşülerek kalan tutar iade edilir.",
        },
      ],
    },
    {
      icon: Clock,
      title: "Süreç ve Zaman",
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          question: "Proje ne zaman başlar?",
          answer:
            "Sözleşme imzalanması ve avans ödemesi sonrası 2-3 iş günü içinde proje başlar. Acil projeler için hızlandırılmış süreç uygulanabilir.",
        },
        {
          question: "Çalışma saatleriniz nedir?",
          answer:
            "Pazartesi-Cuma 09:00-18:00 saatleri arasında aktif destek sağlıyoruz. Acil durumlar için 7/24 iletişim imkanı bulunur.",
        },
        {
          question: "Proje takibi nasıl yapılır?",
          answer:
            "Düzenli olarak proje durumu hakkında bilgilendirme yapılır. WhatsApp, e-posta veya telefon ile sürekli iletişim halinde oluruz.",
        },
        {
          question: "Teslim sonrası destek var mı?",
          answer:
            "Evet, tüm projelerimizde teslim sonrası destek sağlıyoruz. Web siteleri için 1 yıl, tasarım projeleri için 6 ay ücretsiz destek verilir.",
        },
      ],
    },
    {
      icon: Users,
      title: "Teknik Sorular",
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          question: "Web sitesi hangi teknolojilerle yapılır?",
          answer:
            "Modern web teknolojileri (React, Next.js, WordPress) kullanılır. Responsive tasarım, hızlı yükleme ve SEO uyumlu yapılar tercih edilir.",
        },
        {
          question: "Sosyal medya hesaplarıma erişim vermeliyim?",
          answer:
            "Yönetim hizmeti için admin yetkisi gerekir. Güvenlik için şifrelerinizi değiştirmeden yetki verebilirsiniz. Tüm erişimler güvenli şekilde yönetilir.",
        },
        {
          question: "Reklam bütçesi nasıl belirlenir?",
          answer:
            "Hedefleriniz, sektörünüz ve rekabet durumuna göre optimal bütçe önerilir. Minimum bütçe gereksinimleri ve beklenen sonuçlar detaylı olarak açıklanır.",
        },
        {
          question: "Analiz raporları alabilir miyim?",
          answer:
            "Evet, tüm dijital pazarlama faaliyetleri için aylık detaylı raporlar hazırlanır. Performans metrikleri, öneriler ve gelecek planlar raporlarda yer alır.",
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
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">S.S.S</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Sıkça Sorulan
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Sorular
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              2devo Digital hizmetleri hakkında merak ettiğiniz soruların yanıtlarını burada bulabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-white">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-slate-700/30 rounded-lg border border-slate-600 px-6"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-blue-300 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-300 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          {/* Hala Cevap Bulamadınız */}
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Hala Cevap Bulamadınız mı?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Sorularınız için bizimle iletişime geçin. Size en kısa sürede yardımcı olmaktan mutluluk duyarız.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    İletişime Geçin
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

          {/* Hızlı Linkler */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Hizmetlerimiz</h3>
                <p className="text-slate-400 text-sm mb-4">Detaylı hizmet bilgileri</p>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent" asChild>
                  <Link href="/services">İnceleyin</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Referanslarımız</h3>
                <p className="text-slate-400 text-sm mb-4">Başarı hikayelerimiz</p>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent" asChild>
                  <Link href="/references">Görüntüleyin</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Hızlı Randevu</h3>
                <p className="text-slate-400 text-sm mb-4">Ücretsiz görüşme</p>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent" asChild>
                  <Link href="/quick-appointment">Randevu Alın</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}