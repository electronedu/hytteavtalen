import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Slik fungerer Hytteavtalen
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            En enkel prosess for både hytteeiere og leietakere
          </p>

          <div className="space-y-12">
            {/* For Cabin Owners */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">For hytteeiere</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Registrer hytta di</CardTitle>
                    <CardDescription>
                      Last opp bilder og informasjon om hytta. Vi hjelper deg
                      med å sette riktig pris og vilkår.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Legg til bilder, fasiliteter og husregler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Velg hvilke perioder hytta er tilgjengelig</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>
                          Få hjelp til prissetting basert på markedsdata
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Vurder søknader</CardTitle>
                    <CardDescription>
                      Se profiler og video-introduksjoner fra interesserte
                      leietakere.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Alle leietakere er verifisert og screenet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Se tidligere leiehistorikk og anmeldelser</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Tjen på utleie</CardTitle>
                    <CardDescription>
                      Få skattefradrag og leieinntekter mens vi tar oss av det
                      praktiske.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>0.03% skattefradrag per utleiedag</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>
                          Automatisk håndtering av kontrakter og betalinger
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Forsikring inkludert under utleieperioder</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg">
                  <Link href="/register?type=owner" className="gap-2">
                    Registrer din hytte <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

            {/* For Renters */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">For leietakere</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Lag din profil</CardTitle>
                    <CardDescription>
                      Fortell litt om deg selv og last opp en kort
                      video-introduksjon.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Del din bakgrunn og interesser</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Last opp en kort video som presenterer deg</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Finn din hytte</CardTitle>
                    <CardDescription>
                      Søk blant verifiserte hytter og send leieforespørsel.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Filtrer på beliggenhet, fasiliteter og pris</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Se detaljerte beskrivelser og bilder</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Flytt inn</CardTitle>
                    <CardDescription>
                      Når hytteeier godkjenner søknaden din er alt klart.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Digital kontrakt og nøkkelutveksling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Automatisk betaling og strømavlesning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Support tilgjengelig under hele oppholdet</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/register?type=renter" className="gap-2">
                    Finn din hytte <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
