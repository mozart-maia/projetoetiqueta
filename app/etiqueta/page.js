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
              <span className="font-bold">Origem do produto</span> / Cargo
              origem:
            </h1>

            <h1 className="text-center border border-black">
              <span className="font-bold">Terminal </span> / Base:
            </h1>
          </div>
          <div className=" grid grid-cols-2 mt-1 h-8 bg-slate-50">
            <h1 className="text-center border border-black text-blue-700 font-bold">
              TQ 410.07
            </h1>

            <h1 className="text-center border border-black text-blue-700 font-bold">
              TA / GUAMARÉ
            </h1>
          </div>

          {/* segunda seção */}
          <div className="grid grid-cols-3 mt-1  h-8 bg-slate-200">
            <h1 className="text-center border border-black">
              {" "}
              <span className="font-bold">Data </span> / Date:
            </h1>

            <h1 className="text-center border border-black">
              <span className="font-bold">Hora</span> / Time:
            </h1>
            <h1 className="text-center border border-black">
              <span className="font-bold"> Produto </span>/ Cargo:
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
              <span className="font-bold"> Tipo de amostra </span> / Sample
              type:
            </h1>

            <h1 className="text-center border border-black">
              <span className="font-bold"> Item de movim. </span> / Item:
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
              <span className="font-bold"> Ponto de amostragem </span> / Cargo
              tank:
            </h1>

            <h1 className="text-center border border-black">
              {" "}
              <span className="font-bold">Lacre </span> / Seal:
            </h1>
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
            <h1 className="text-center ">
              {" "}
              <span className="font-bold"> Finalidade da amostra </span> /
              Reason:
            </h1>
          </div>
          <div className="mt-1 h-10 border border-black bg-slate-50">
            <h1 className="text-center text-lg  text-blue-700 font-bold">
              Ponto de Fulgor e Viscosidade
            </h1>
          </div>
          {/* sexta seção  */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">
              <span className="font-bold"> Responsável pela amostragem </span> /
              Sample responsible:
            </h1>
          </div>
          <div className="mt-1 h-10 border border-black bg-slate-50">
            <h1 className="text-center text-lg  text-blue-700 font-bold">
              Malonei
            </h1>
          </div>
          {/* setima seção */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">
              {" "}
              <span className="font-bold"> Observação</span> / Remarks:
            </h1>
          </div>
          <div className="mt-1 h-10 border border-black bg-slate-50">
            <h1 className="text-center text-lg  text-blue-700 font-bold">
              Acompanhamento.
            </h1>
          </div>
          {/* oitava seção  */}
          <div className="mt-1 h-7 border border-black bg-slate-200">
            <h1 className="text-center ">
              {" "}
              <span className="font-bold">Assinaturas </span> / Signatures:
            </h1>
          </div>
          <div className="grid grid-cols-2 h-7  bg-slate-200">
            <h1 className="text-center border border-black bg-slate-200">
              <span className="font-bold"> Terminal </span> / Terminal:
            </h1>
            <h1 className="text-center border border-black bg-slate-200">
              <span className="font-bold">Navio/Outros</span>/Tanker/others:
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
