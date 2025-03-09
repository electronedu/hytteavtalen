import Image from "next/image";
import Link from "next/link";
import { CabinCard } from "@/components/ui/cabin-card";
import { TaxCalculator } from "@/components/tax-calculator";
import { FeatureSteps } from "@/components/feature-steps";
import { CabinTestimonials } from "@/components/ui/cabin-testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { ClientCabinSearch } from "@/components/client-cabin-search";
import { ClientFaqSection } from "@/components/client-faq-section";

export default function Home() {
  // Sample data for featured cabins
  const featuredCabins = [
    {
      id: 1,
      image: "/images/cabin-1.jpg",
      name: "Fjellhytte",
      location: "Geilo, Norge",
      bedrooms: 3,
      bathrooms: 2,
      available: true,
      features: ["Peis", "Badstu", "Fjellsyn"],
    },
    {
      id: 2,
      image: "/images/cabin-2.jpg",
      name: "Hytte ved innsjøen",
      location: "Lillehammer, Norge",
      bedrooms: 2,
      bathrooms: 1,
      available: true,
      availableFrom: "15. juni",
      features: ["Innsjøtilgang", "Fiske", "Båtbrygge"],
    },
    {
      id: 3,
      image: "/images/cabin-3.jpg",
      name: "Skoghytte",
      location: "Trysil, Norge",
      bedrooms: 4,
      bathrooms: 2,
      available: false,
      features: ["Ski inn/ut", "Boblebad", "Spillrom"],
    },
  ];

  // Sample data for how it works section
  const howItWorksSteps = [
    {
      step: "Trinn 1",
      title: "Registrer hytta di",
      content:
        "Opprett en konto og registrer hytta di med bilder, fasiliteter og tilgjengelighet.",
      image: "/images/step-1.jpg",
    },
    {
      step: "Trinn 2",
      title: "Godta bookinger",
      content:
        "Gjennomgå og godta bookingforespørsler fra verifiserte leietakere.",
      image: "/images/step-2.jpg",
    },
    {
      step: "Trinn 3",
      title: "Motta skattefordeler",
      content:
        "Få opptil 6% skattefradrag på din personlige inntekt basert på utleiedager.",
      image: "/images/step-3.jpg",
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      quote:
        "Takket være Hytteavtalens skattefradragsprogram har jeg spart over 15 000 kr årlig på hytta mi i Trysil. Søknadsprosessen var enkel og supportteamet var utrolig hjelpsomme.",
      name: "Morten Johansen",
      location: "Trysil, Innlandet",
      savings: "Årlig besparelse: 15 000 kr",
      src: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "Som hytteeier i Hemsedal i over 10 år var jeg skeptisk til programmet i begynnelsen. Men etter å ha søkt har jeg redusert eiendomsskatten betydelig og kan nå investere mer i vedlikehold av hytta mi.",
      name: "Ingrid Larsen",
      location: "Hemsedal, Viken",
      savings: "Årlig besparelse: 12 500 kr",
      src: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "Skattefradragsprogrammet har gjort det mye mer overkommelig å eie familiehytta vår i Oppdal. Besparelsene har gjort det mulig for oss å oppgradere fasilitetene og tilbringe mer tid på fjellhytta vår.",
      name: "Anders Olsen",
      location: "Oppdal, Trøndelag",
      savings: "Årlig besparelse: 18 200 kr",
      src: "/images/testimonial-3.jpg",
    },
  ];

  // Sample data for FAQ section
  const faqItems = [
    {
      question: "Hva er Hytteavtalens skattefradragsprogram?",
      answer:
        "Hytteavtalen er et skatteinsentivsystem som lar hytteeiere motta skattefradrag når de leier ut eiendommene sine. Programmet har som mål å øke tilgjengeligheten av utleiehytter samtidig som det gir økonomiske fordeler til eierne.",
      category: "Programoversikt",
    },
    {
      question: "Hvem er kvalifisert for skattefordelene?",
      answer:
        "Enhver person som eier en hytte eller ferieeiendom i Norge og leier den ut gjennom vår plattform kan kvalifisere. Eiendommen må oppfylle visse standarder og være tilgjengelig for utleie i et minimum antall dager per år.",
      category: "Kvalifikasjon",
    },
    {
      question: "Hvor mye kan jeg spare i skatt?",
      answer:
        "Hytteeiere kan motta 0,03% skattefradrag per dag de leier ut hytta si. For eksempel, hvis du leier ut hytta di i 100 dager, vil du få 3% skattefradrag fra din personlige inntektsskatt.",
      category: "Skattefordeler",
    },
    {
      question: "Hva er kravene til hytta mi?",
      answer:
        "For å kvalifisere for programmet må hytta di ha elektrisitet og vann. I tillegg bør den oppfylle grunnleggende sikkerhets- og komfortstandarder for å sikre en behagelig opplevelse for leietakere.",
      category: "Krav",
    },
    {
      question: "Hvordan fungerer plattformen?",
      answer:
        "Vår plattform kobler hytteeiere med potensielle leietakere. Vi håndterer bookingprosessen, betalinger og gir nødvendig dokumentasjon for skatteformål. Eiere registrerer eiendommene sine, setter tilgjengelighet og priser, mens vi tar oss av resten.",
      category: "Plattform",
    },
    {
      question: "Hvilken dokumentasjon trenger jeg for skatterapportering?",
      answer:
        "Vi gir omfattende utleierapporter som inkluderer all nødvendig informasjon for selvangivelsen din. Dette inkluderer utleieperioder, mottatt inntekt og beregnede fradrag som du kan sende direkte til skattemyndighetene.",
      category: "Dokumentasjon",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Hytteavtalen logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="font-semibold text-lg">Hytteavtalen</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6">
            <Link href="/how-it-works" className="hover:text-foreground/80">
              Slik fungerer det
            </Link>
            <Link href="/pricing" className="hover:text-foreground/80">
              Priser
            </Link>
            <Link href="/contact" className="hover:text-foreground/80">
              Kontakt
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="rounded-full border border-solid border-transparent px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Logg inn
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              Registrer deg
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>

          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Norsk hyttelandskap"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Lei ut hytta di,{" "}
                <span className="text-primary">få skattefordeler</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Hytteavtalen hjelper hytteeiere med å få skattefradrag ved å
                leie ut eiendommene sine. Få opptil 6% skattefradrag på din
                personlige inntekt mens du hjelper andre med å finne rimelig
                overnatting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/register?type=owner">
                    Registrer hytta di <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/how-it-works">Lær mer</Link>
                </Button>
              </div>
            </div>

            {/* Search Component */}
            <div className="mt-12">
              <ClientCabinSearch />
            </div>
          </div>
        </section>

        {/* Featured Cabins Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Utvalgte hytter</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oppdag vakre hytter tilgjengelig gjennom
                Hytteavtalen-programmet. Disse eiendommene tilbyr komfort,
                fasiliteter og uforglemmelige opplevelser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCabins.map((cabin) => (
                <CabinCard
                  key={cabin.id}
                  image={cabin.image}
                  name={cabin.name}
                  location={cabin.location}
                  bedrooms={cabin.bedrooms}
                  bathrooms={cabin.bathrooms}
                  available={cabin.available}
                  availableFrom={cabin.availableFrom}
                  features={cabin.features}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/cabins">Se alle hytter</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tax Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Beregn dine skattefordeler
                </h2>
                <p className="text-muted-foreground mb-6">
                  Bruk kalkulatoren vår for å estimere hvor mye du kan spare i
                  skatt ved å delta i Hytteavtalen-programmet.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        0,03% skattefradrag per dag
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        For hver dag hytta di leies ut, mottar du 0,03%
                        skattefradrag på din personlige inntekt.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        Opptil 6% årlig besparelse
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Lei ut hytta di i 200 dager og motta 6% skattefradrag på
                        din personlige inntekt.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Automatisk dokumentasjon</h3>
                      <p className="text-sm text-muted-foreground">
                        Vi gir all nødvendig dokumentasjon for selvangivelsen
                        din, noe som gjør prosessen sømløs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <TaxCalculator maxDays={200} defaultDays={30} taxRate={0.22} />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Slik fungerer det</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Å bli med i Hytteavtalen er enkelt. Følg disse trinnene for å
                begynne å tjene skattefordeler.
              </p>
            </div>

            <FeatureSteps
              features={howItWorksSteps}
              title=""
              autoPlayInterval={5000}
              imageHeight="h-[400px]"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <CabinTestimonials testimonials={testimonials} />

        {/* FAQ Section */}
        <ClientFaqSection
          title="Ofte stilte spørsmål"
          description="Alt du trenger å vite om skattefradragsprogrammet og plattformen vår"
          items={faqItems}
          contactTitle="Har du fortsatt spørsmål om Hytteavtalen?"
          contactDescription="Våre skattespesialister er klare til å hjelpe deg"
          contactButtonText="Kontakt support"
        />

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klar til å komme i gang?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Bli med i Hytteavtalen i dag og begynn å tjene skattefordeler mens
              du hjelper andre med å finne rimelig overnatting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/register?type=owner">Registrer hytta di</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/register?type=renter">Finn en hytte</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Om oss</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Om Hytteavtalen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Karriere
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ressurser</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Hjelp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blogg
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Juridisk</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Personvern
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Vilkår
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/support"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Kontakt oss
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hytteavtalen. Alle rettigheter
            reservert.
          </div>
        </div>
      </footer>
    </div>
  );
}
