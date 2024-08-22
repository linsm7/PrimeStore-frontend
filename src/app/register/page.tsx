import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { UserRoundPlus } from "lucide-react";

export default function Register() {
  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <UserRoundPlus className="h-8 w-8 text-psColor-400" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ou{" "}
            <Link
              href="/login"
              className="font-medium text-psColor-400 hover:text-psColor-500"
            >
              Faça seu Login
            </Link>
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 w-full rounded px-3 py-2"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 w-full rounded px-3 py-2"
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full rounded px-3 py-2"
            />
          </div>
          <div>
            <Label htmlFor="confirm-password">Confirmar sua senha</Label>
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full rounded px-3 py-2"
            />
          </div>
          <div>
            <Button type="submit" className="w-full bg-psColor-400 rounded p-6 text-sm md:text-base hover:bg-psColor-500">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
