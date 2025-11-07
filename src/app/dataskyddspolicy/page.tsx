import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DataskyddspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Databeskyttelsespolitik
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Information om hvordan vi hos Art of Dent behandler dine personoplysninger
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <p className="text-lg text-gray-700 mb-8">
            Art of Dent Academy AB værner om din integritet og er engageret i at beskytte dine personoplysninger. 
            Denne databeskyttelsespolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger i overensstemmelse med 
            EU&apos;s generelle databeskyttelsesforordning (GDPR) og svensk lovgivning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Dataansvarlig</h2>
          <p className="text-gray-700 mb-6">
            Art of Dent Academy AB er dataansvarlig for behandlingen af dine personoplysninger. 
            Hvis du har spørgsmål om, hvordan vi behandler dine personoplysninger, er du velkommen til at kontakte os:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-2"><strong>Art of Dent Academy AB</strong></p>
            <p className="text-gray-700 mb-2">Hantverkaregatan 6D, 211 22 Malmö</p>
            <p className="text-gray-700 mb-2">Telefon: +46 40-12 11 08</p>
            <p className="text-gray-700">E-post: Artofdent.klinik@gmail.com</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvilke personoplysninger indsamler vi?</h2>
          <p className="text-gray-700 mb-4">Vi indsamler og behandler følgende personoplysninger:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Identifikationsoplysninger:</strong> Navn, personnummer, adresse, telefonnummer, e-postadresse</li>
            <li><strong>Sundhedsoplysninger:</strong> Journalnotater, behandlingshistorik, røntgenbilleder, medicinske vurderinger</li>
            <li><strong>Ekonomiske oplysninger:</strong> Faktureringsoplysninger, betalingshistorik</li>
            <li><strong>Bookingoplysninger:</strong> Tidsbestilling, behandlingstype, tidligere besøg</li>
            <li><strong>Tekniske oplysninger:</strong> IP-adresse, cookies ved brug af vores hjemmeside</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvorfor behandler vi dine personoplysninger?</h2>
          <p className="text-gray-700 mb-4">Vi behandler dine personoplysninger til følgende formål:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Patientpleje:</strong> For at kunne give dig tandpleje og følge op på din behandling</li>
            <li><strong>Journalføring:</strong> Ifølge patientdataloven er vi forpligtet til at føre patientjournal</li>
            <li><strong>Bookinger:</strong> For at administrere dine tidsbestillinger og påmindelser</li>
            <li><strong>Fakturering:</strong> For at fakturere vores tjenester og håndtere betalinger</li>
            <li><strong>Juridiske krav:</strong> For at opfylde vores lovbestemte forpligtelser</li>
            <li><strong>Kommunikation:</strong> For at kontakte dig om din behandling og vigtige meddelelser</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Laglig grund för behandling</h2>
          <p className="text-gray-700 mb-6">
            Vi behandlar dina personuppgifter baserat på:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Fullgörande av avtal när du bokar tid och genomgår behandling</li>
            <li>Rättslig förpliktelse enligt patientdatalagen och bokföringslagen</li>
            <li>Berättigat intresse för att utveckla och förbättra vår verksamhet</li>
            <li>Samtycke i vissa fall, t.ex. för marknadsföring</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur länge sparar vi dina uppgifter?</h2>
          <p className="text-gray-700 mb-6">
            Vi sparar dina personuppgifter så länge det är nödvändigt för de ändamål som beskrivs i denna policy:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Patientjournal:</strong> Minst 10 år efter senaste anteckningen enligt patientdatalagen</li>
            <li><strong>Bokföringsmaterial:</strong> 7 år enligt bokföringslagen</li>
            <li><strong>Övriga uppgifter:</strong> Så länge det finns ett berättigat behov</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vem delar vi dina uppgifter med?</h2>
          <p className="text-gray-700 mb-6">
            Vi kan dela dina personuppgifter med:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Andra vårdgivare när det är nödvändigt för din vård (med ditt samtycke)</li>
            <li>Försäkringskassan och tandvårds- och läkemedelsförmånsverket</li>
            <li>Laboratorier för tandtekniska arbeten</li>
            <li>IT-leverantörer som hanterar våra journalsystem (personuppgiftsbiträden)</li>
            <li>Myndigheter när vi är skyldiga enligt lag</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Dina rättigheter</h2>
          <p className="text-gray-700 mb-4">Du har följande rättigheter enligt GDPR:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Rätt till tillgång:</strong> Du har rätt att få en kopia av dina personuppgifter</li>
            <li><strong>Rätt till rättelse:</strong> Du kan begära att felaktiga uppgifter rättas</li>
            <li><strong>Rätt till radering:</strong> I vissa fall kan du begära att vi raderar dina uppgifter</li>
            <li><strong>Rätt till begränsning:</strong> Du kan begära att behandlingen begränsas</li>
            <li><strong>Rätt till dataportabilitet:</strong> Du kan få ut dina uppgifter i ett strukturerat format</li>
            <li><strong>Rätt att göra invändningar:</strong> Du kan invända mot viss behandling</li>
            <li><strong>Rätt att återkalla samtycke:</strong> När behandling baseras på samtycke kan du när som helst återkalla det</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Säkerhet</h2>
          <p className="text-gray-700 mb-6">
            Vi använder tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot 
            obehörig åtkomst, förlust eller manipulation. Detta inkluderar:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Kryptering av känslig data</li>
            <li>Säkra journalsystem med begränsad åtkomst</li>
            <li>Regelbundna säkerhetskopior</li>
            <li>Utbildning av personal i dataskydd</li>
            <li>Fysisk säkerhet i våra lokaler</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cookies</h2>
          <p className="text-gray-700 mb-6">
            Vår webbplats använder cookies för att förbättra din användarupplevelse. Cookies är små textfiler 
            som lagras på din enhet. Vi använder cookies för:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Att webbplatsen ska fungera korrekt (nödvändiga cookies)</li>
            <li>Att analysera hur besökare använder webbplatsen (analysverktyg)</li>
            <li>Att förbättra användarupplevelsen</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Du kan när som helst ändra dina cookie-inställningar i din webbläsare.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Klagomål</h2>
          <p className="text-gray-700 mb-6">
            Om du anser att vi behandlar dina personuppgifter på ett felaktigt sätt har du rätt att lämna in ett 
            klagomål till Integritetsskyddsmyndigheten (IMY):
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-2"><strong>Integritetsskyddsmyndigheten</strong></p>
            <p className="text-gray-700 mb-2">Box 8114, 104 20 Stockholm</p>
            <p className="text-gray-700 mb-2">Telefon: 08-657 61 00</p>
            <p className="text-gray-700">Webb: www.imy.se</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ändringar i dataskyddspolicyn</h2>
          <p className="text-gray-700 mb-6">
            Vi kan komma att uppdatera denna dataskyddspolicy. Eventuella ändringar publiceras på denna sida. 
            Vi rekommenderar att du regelbundet läser igenom policyn för att hålla dig informerad om hur vi 
            skyddar dina personuppgifter.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Senast uppdaterad:</strong> Januari 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kontakta oss</h2>
          <p className="text-gray-700 mb-6">
            Om du har frågor om denna dataskyddspolicy eller hur vi behandlar dina personuppgifter, 
            vänligen kontakta oss:
          </p>
          <div className="bg-primary-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2"><strong>E-post:</strong> Artofdent.klinik@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Telefon:</strong> 040-121 108</p>
            <p className="text-gray-700"><strong>Adress:</strong> Hantverkaregatan 6D, 211 22 Malmö</p>
          </div>

        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-primary-700 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-800 transition-all"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
