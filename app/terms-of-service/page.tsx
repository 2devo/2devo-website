import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CreditCard, Shield, AlertTriangle, CheckCircle, Phone } from "lucide-react"

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: "Hizmet Kapsamı",
      content: [
        "Dijital pazarlama danışmanlığı ve uygulama hizmetleri",
        "Sosyal medya yönetimi ve içerik üretimi",
        "Web sitesi tasarım ve geliştirme hizmetleri",
        "Reklam kampanyası yönetimi (Google Ads, Meta Ads)",
        "Kurumsal kimlik ve grafik tasarım hizmetleri",
        "SEO ve dijital analiz hizmetleri",
      ],
    },
    {
      icon: CreditCard,
      title: "Ödeme Koşulları",
      content: [
        "Proje başlangıcında %50 avans ödemesi yapılır",
        "Kalan %50 proje teslimi ile birlikte ödenir",
        "Aylık hizmetlerde ödeme ayın ilk haftasında yapılır",
        "Ödemeler banka havalesi veya kredi kartı ile yapılabilir",
        "Geciken ödemelerde %2 gecikme faizi uygulanır",
        "Fatura tarihi itibariyle 7 gün ödeme vadesi vardır",
      ],
    },
    {
      icon: Shield,
      title: "Sorumluluklar",
      content: [
        "Müşteri, doğru ve güncel bilgi sağlamakla yükümlüdür",
        "Telif hakkı olan içerikler müşteri sorumluluğundadır",
        "2devo Digital, hizmet kalitesini garanti eder",
        "Teknik arızalar durumunda en kısa sürede müdahale edilir",
        "Müşteri memnuniyetsizliği durumunda revizyon hakkı vardır",
        "Yasal uyumluluk konularında danışmanlık sağlanır",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Sınırlamalar",
      content: [
        "Hizmet süresi boyunca 3 ana revizyon hakkı vardır",
        "Ek revizyon talepleri ayrıca ücretlendirilir",
        "Proje kapsamı dışındaki talepler ek ücrete tabidir",
        "Müşteri kaynaklı gecikmeler proje süresini uzatabilir",
        "Üçüncü parti platform değişiklikleri hizmet kapsamı dışındadır",
        "Force majeure durumlarında sorumluluk kabul edilmez",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Hizmet Sözleşmesi</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Hizmet
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Sözleşmesi
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              2devo Digital hizmetlerinden yararlanırken geçerli olan şartlar, koşullar ve karşılıklı sorumluluklar.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Genel Şartlar */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Genel Şartlar</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                Bu hizmet sözleşmesi, 2devo Digital ("Hizmet Sağlayıcı") ile müşteri ("Müşteri") arasında dijital
                pazarlama hizmetlerinin sunulması konusunda yapılan anlaşmanın şartlarını belirler.
              </p>
              <p>
                Hizmet alımı ile birlikte bu sözleşme şartlarını kabul etmiş sayılırsınız. Sözleşme, Türkiye Cumhuriyeti
                yasalarına tabidir ve Sakarya mahkemeleri yetkilidir.
              </p>
              <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                <p className="text-blue-300">
                  <strong>Hizmet Sağlayıcı:</strong> 2devo Digital
                  <br />
                  <strong>Adres:</strong> Sakarya, Türkiye
                  <br />
                  <strong>İletişim:</strong> info@2devo.com | 0530 729 6759
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ana Bölümler */}
          {sections.map((section, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Proje Süreci */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white">Proje Süreci</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Başlangıç Süreci</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. İlk görüşme ve ihtiyaç analizi</li>
                    <li>2. Teklif hazırlama ve sunumu</li>
                    <li>3. Sözleşme imzalama ve avans ödemesi</li>
                    <li>4. Proje başlangıç toplantısı</li>
                    <li>5. Çalışma takvimi oluşturma</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Uygulama Süreci</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. Tasarım ve strateji geliştirme</li>
                    <li>2. Müşteri onayı ve revizyon</li>
                    <li>3. Uygulama ve test aşaması</li>
                    <li>4. Nihai onay ve teslim</li>
                    <li>5. Eğitim ve destek süreci</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* İptal ve İade */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">İptal ve İade Koşulları</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Müşteri İptali</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Proje başlangıcından itibaren 7 gün içinde iptal hakkı</li>
                    <li>• Yapılan çalışma karşılığında kısmi ödeme</li>
                    <li>• Avans ödemesinin kalan kısmının iadesi</li>
                    <li>• İptal bildirimi yazılı olarak yapılmalıdır</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Hizmet Sağlayıcı İptali</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ödeme gecikmesi durumunda iptal hakkı</li>
                    <li>• Müşteri yükümlülüklerini yerine getirmemesi</li>
                    <li>• Teknik imkansızlık durumunda tam iade</li>
                    <li>• 15 gün önceden yazılı bildirim</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garanti ve Destek */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Garanti ve Destek</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-2">Web Sitesi</h4>
                  <p className="text-sm">1 yıl teknik destek ve güvenlik güncellemeleri</p>
                </div>
                <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-semibold mb-2">Tasarım</h4>
                  <p className="text-sm">6 ay içinde ücretsiz küçük düzeltmeler</p>
                </div>
                <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">Reklam Yönetimi</h4>
                  <p className="text-sm">Sürekli optimizasyon ve aylık raporlama</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* İletişim */}
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sözleşme Hakkında Sorularınız</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Hizmet sözleşmesi hakkında detaylı bilgi almak veya özel şartlar görüşmek için bizimle iletişime geçin.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                <div>
                  <strong>E-posta:</strong> info@2devo.com
                </div>
                <div>
                  <strong>Telefon:</strong> 0530 729 6759
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-4">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}