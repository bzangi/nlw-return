import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

// Estado, sempre que as variáveis do estado mudarem de valor o react cria a interface do componente com o novo valor

export function Widget() {

    return(
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>Oi React</Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6"/>

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}