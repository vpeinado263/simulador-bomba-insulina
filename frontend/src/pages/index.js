import InfusionCalculator from '@/components/InfusionCalculator';

export default function Home() {

  return (
    <>
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Simulador de Bomba de Insulina
          </h1>
          <InfusionCalculator />
        </div>
    </>
  );
};
