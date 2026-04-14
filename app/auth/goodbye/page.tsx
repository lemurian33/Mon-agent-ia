import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { SiteConfig } from "@/site-config";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Comptes supprimé | ${SiteConfig.title}`,
  description:
    "Ton compte a été supprimé avec succes. Merci pour l'utilisation de nos services.",
};

export default function GoodbyePage() {
  return (
    <Card className="mx-auto w-full max-w-md lg:max-w-lg lg:p-6">
      <CardHeader>
        <div className="flex justify-center">
          <Avatar className="size-16">
            <AvatarFallback>
              <CheckCircle />
            </AvatarFallback>
          </Avatar>
        </div>
        <CardHeader className="text-center">Compte Supprimer</CardHeader>

        <CardDescription className="text-center">
          Votre compte a été supprimé. Nous sommes désolés de vous voir partir.
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t pt-6">
        <div className="w-full space-y-4 text-center">
          <p className="text-muted-foreground text-sm">
            Votre compte et toutes les données associées ont été définitivement supprimés de notre système. 
            Nous espérons que vous avez apprécié votre expérience avec nous.
          </p>
          <p className="text-muted-foreground text-sm">
            Si vous changez d'avis, vous pouvez créer un nouveau compteà tout moment.
          </p>
          <Button asChild className="w-full">
            <Link href="/auth/signup">Créer un nouveau compte</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
