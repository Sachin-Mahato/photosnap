import Check from "../assets/shared/desktop/check.svg";

const TableEntry = ({ heading, basic, pro, business }) => (
  <li className="border-b-[1px] sm:flex">
    <h4 className="mb-4 text-[12px] font-bold tracking-[2px] text-pureBlack sm:mr-auto sm:ml-6">
      {heading}
    </h4>
    <div className="flex pb-[24px] text-[10px] font-bold tracking-[1.67px] text-pureBlack">
      <div className="mr-[68px] flex flex-col gap-2 sm:mr-[124px]">
        <span className="opacity-50 sm:hidden">BASIC</span>
        {basic && (
          <span>
            <img src={Check} alt="Checkmark" />
          </span>
        )}
      </div>
      <div className="mr-[82px] flex flex-col gap-2 sm:mr-[124px]">
        <span className="opacity-50 sm:hidden">PRO</span>
        {pro && (
          <span>
            <img src={Check} alt="Checkmark" />
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:mr-[62px]">
        <span className="opacity-50 sm:hidden">BUSINESS</span>
        {business && (
          <span>
            <img src={Check} alt="Checkmark" />
          </span>
        )}
      </div>
    </div>
  </li>
);

const PricingTable = () => (
  <>
    <h3 className="mb-14 hidden text-center text-[40px] font-bold leading-[48px] tracking-[4.17px] sm:block">
      COMPARE
    </h3>
    <ul className="mx-[30px] mb-16 flex max-w-[731px] flex-col gap-[23px] sm:mx-auto sm:mb-[112px]">
      <div className="items-center text-[12px] font-bold tracking-[2px] text-pureBlack sm:ml-6 sm:flex sm:text-center">
        <h3 className="w-[140px] text-left sm:mr-auto">THE FEATURES</h3>
        <h4 className="hidden min-w-[140px] sm:block">BASIC</h4>
        <h4 className="hidden min-w-[140px] sm:block">PRO</h4>
        <h4 className="hidden min-w-[140px] sm:block">BUSINESS</h4>
      </div>

      <hr className="border-pureBlack" />
      <TableEntry heading="UNLIMITED STORY POSTING" basic pro business />
      <TableEntry heading="UNLIMITED PHOTO UPLOAD" basic pro business />
      <TableEntry heading="EMBEDDING CUSTOM CONTENT" pro business />
      <TableEntry heading="CUSTOMIZE METADATA" pro business />
      <TableEntry heading="ADVANCED METRICS" business />
      <TableEntry heading="PHOTO DOWNLOADS" business />
      <TableEntry heading="SEARCH ENGINE INDEXING" business />
      <TableEntry heading="CUSTOM ANALYTICS" business />
    </ul>
  </>
);

export default PricingTable;
