import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({auth}){
    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >

        </AuthenticatedLayout>
    )
}