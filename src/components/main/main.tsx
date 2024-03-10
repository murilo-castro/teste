import Secao01 from "./secao01";
import Form from "../form";
import Secao03 from "./secao03";
import Secao04 from "./secao04";
export default function Main() {
  return (
    <main className="h-full min-h-full min-w-full">
      <div>
        <div className="flex flex-col desktop:flex-row justify-between mx-auto mt-1">
          <Secao01 />
          <div className="flex w-[300px] md:w-[454px] mx-auto " >
            <Form />
          </div>
        </div>
        <Secao03 />
        <Secao04 />
      </div>
    </main>
  );
}
