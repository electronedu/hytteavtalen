import { CabinForm } from "@/components/cabins/CabinForm";

export default function NewCabinPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Registrer ny hytte</h1>
      <CabinForm />
    </div>
  );
}
