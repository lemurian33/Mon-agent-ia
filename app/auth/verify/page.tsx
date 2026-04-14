import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteConfig } from "@/site-config";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Verifier votre email | ${SiteConfig.title}`,
  description:
    "Veuillez consulter votre messagerie et cliquer sur le lien de vérification pour finaliser la configuration de votre compte.",
};

export default function VerificationCard() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="text-center">
        <div className="bg-primary/10 mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
          <Mail className="text-primary size-6" />
        </div>
        <CardTitle className="text-2xl">Verifier votre email</CardTitle>
        <CardDescription>
          Nous avons envoyé un lien de vérification à votre adresse e-mail.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="mb-2 font-medium">Veuillez consulter votre boîte e-mail.</p>
          <p className="text-muted-foreground">
            Pour finaliser la configuration de votre compte, veuillez ouvrir l'e-mail de
            vérification que nous venons de vous envoyer et cliquer sur le lien qu'il contient.
          </p>
        </div>
        <div className="text-muted-foreground text-sm">
          <p>
            Si vous ne voyez pas l'e-mail dans votre boîte de réception, veuillez vérifier votre
            dossier de courriers indésirables ou demander un nouveau lien de vérification.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-6">
        <p className="text-muted-foreground text-center text-xs">
          Vous rencontrez des difficultés ? Contactez notre équipe d’assistance.
        </p>
      </CardFooter>
    </Card>
  );
}
