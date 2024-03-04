import React, { useState } from 'react';
import NewCompanyForm from '@/components/create-user/NewCompanyForm'
import NewCustomerForm from '@/components/create-user/NewCustomerForm'
import cn from "@/lib/util";

interface Tab {
    label: string;
    component: React.FC;
}

const tabs: Tab[] = [
    { label: 'Customer', component: NewCustomerForm },
    { label: 'Company', component: NewCompanyForm },
];

export default function SignUpPage() {

    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <div className="w-full max-w-[420px] m-auto">
            <h1 className="my-6 text-center">Registration</h1>

            <ul className='flex items-center justify-center my-10'>
                {tabs.map((tab, index) => (
                    <li key={index} onClick={() => setActiveTab(index)} className={cn('inline-flex items-center px-6 py-2 text-primary border border-gray-100 cursor-pointer first:border-r-0 last:border-l-0 first:rounded-l-3xl last:rounded-r-3xl', index === activeTab && 'text-white bg-primary cursor-default border-primary')}>
                        {tab.label}
                    </li>
                ))}
            </ul>
            {activeTab === 0 ? <NewCustomerForm /> : <NewCompanyForm />}
        </div>
    )
}
