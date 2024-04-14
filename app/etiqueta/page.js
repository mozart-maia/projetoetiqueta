import Image from "next/image";
import logo from "./../../public/transpetro_logo.png";

export default function Etiqueta() {
  return (
    <>
      <div className="bg-white w-full h-screen ">
        <div className="w-1/2 border border-b-0 border-black">
          {/* seção zero */}
          <div className="bg-gray-200 border border-black">
            <span>
              <Image
                src={logo}
                alt="logo transpetro"
                width={100}
                height={100}
              />
            </span>

            <h1 className="text-center text-5xl">ETIQUETA DE AMOSTRA /</h1>
            <h1 className="text-center text-4xl mb-3">SAMPLE LABEL</h1>
          </div>

          {/* primeira seção */}
          <div className="grid grid-cols-2  h-8 bg-slate-200">
            <h1 className="text-center border border-black">
              Origem do produto / Cargo origem:
            </h1>

            <h1 className="text-center border border-black">
              Terminal / Base:
            </h1>
          </div>
          <div className=" grid grid-cols-2 mt-1 h-8 bg-slate-50">
            <h1 className="text-center border border-black text-blue-700 font-bold">
              TQ 410.07
            </h1>

            <h1 className="text-center border border-black text-blue-700 font-bold">
              Terminal / Base:
            </h1>
          </div>

          {/* segunda seção */}
          <div className="grid grid-cols-3 mt-1  h-8 bg-slate-200">
            <h1 className="text-center border border-black">Data / Date:</h1>

            <h1 className="text-center border border-black">Hora / Time:</h1>
            <h1 className="text-center border border-black">
              Produto / Cargo:
            </h1>
          </div>
          <div className=" grid grid-cols-3 mt-1 h-8 bg-slate-50">
            <h1 className="text-center border border-black text-blue-700 font-bold">
              04/04/2024
            </h1>

            <h1 className="text-center border border-black text-blue-700 font-bold">
              -
            </h1>
            <h1 className="text-center border border-black text-blue-700 font-bold">
              Bunker - 7A1
            </h1>
          </div>
          {/* terceira seção   */}
          <div className="grid grid-cols-2 mt-1 h-8 bg-slate-200">
            <h1 className="text-center border border-black">
              Tipo de amostra / Sample type:
            </h1>

            <h1 className="text-center border border-black">
              Item de movim. / Item:
            </h1>
          </div>
          <div className=" grid grid-cols-2 mt-1 h-8 bg-slate-50">
            <h1 className="text-center border border-black text-blue-700 font-bold">
              BOCA DE MEDIÇÃO
            </h1>

            <h1 className="text-center border border-black text-blue-700 font-bold">
              -
            </h1>
          </div>
          {/* quarta seção  */}
          <div className="grid grid-cols-2 mt-1 h-8 bg-slate-200">
            <h1 className="text-center border border-black">
              Ponto de amostragem / Cargo tank:
            </h1>

            <h1 className="text-center border border-black">Lacre / Seal:</h1>
          </div>
          <div className=" grid grid-cols-2 mt-1 h-8 bg-slate-50">
            <h1 className="text-center border border-black text-blue-700 font-bold">
              CORRIDA
            </h1>

            <h1 className="text-center border border-black text-blue-700 font-bold">
              -
            </h1>
          </div>
          {/* quinta seção  */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">Finalidade da amostra / Reason:</h1>
          </div>
          <div className="mt-1 h-10 border border-black bg-slate-50">
            <h1 className="text-center text-lg  text-blue-700 font-bold">
              Ponto de Fulgor e Viscosidade
            </h1>
          </div>
          {/* sexta seção  */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">
              Responsável pela amostragem / Sample responsible:
            </h1>
          </div>
          <div className="mt-1 h-10 border border-black bg-slate-50">
            <h1 className="text-center text-lg  text-blue-700 font-bold">
              Malonei
            </h1>
          </div>
          {/* setima seção */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">Observação / Remarks:</h1>
          </div>
          <div className="mt-1 h-10 border border-black bg-slate-50">
            <h1 className="text-center text-lg  text-blue-700 font-bold">
              Acompanhamento.
            </h1>
          </div>
          {/* oitava seção  */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">Assinaturas / Signatures:</h1>
          </div>
          <div className="grid grid-cols-2 h-7  bg-slate-200">
            <h1 className="text-center border border-black bg-slate-200">
              Terminal / Terminal:
            </h1>
            <h1 className="text-center border border-black bg-slate-200">
              Navio/Outros/Tanker/others:
            </h1>
          </div>
          <div className="grid grid-cols-2 h-7">
            <div className="border border-black h-20"></div>
            <div className="border border-black h-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
