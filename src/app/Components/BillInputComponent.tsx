import { Button } from "flowbite-react"

export function BillInputComponent(props: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    
    return (
      
        <div className="rounded-md flex mt-5 justify-center">
            <div className="pl-3 pr-1 py-1 mx-3 my-3 rounded-md bg-slate-300 text-black text-lg">
                $
                <input
                type="text"
                name="price"
                className="rounded-md px-3 pl-3 ml-3 text-left placeholder:text-gray-400 text-lg"
                placeholder="00.00"
                pattern="\d+(\.\d{0,2})?"
                onChange={props.onChange}
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                />
            </div>
            
          
        </div>
      
    )
  }

