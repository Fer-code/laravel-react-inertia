import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';

export default function Index({auth, projects}){
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Projects
                </h2>
            }
        >

            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Image</th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Create Date</th>
                                        <th className="px-3 py-3">Due Date</th>
                                        <th className="px-3 py-3">Created By</th>
                                        <th className="px-3 py-3">Actions</th>
                                    </tr>
                                </thead >
                                <tbody>
                                    {projects.data.map((project) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th className="px-3 py-2">
                                                {project.id}
                                            </th>

                                            <td className="px-3 py-2">
                                                <img src={project.image_path} style={{ width: 60 }} />     
                                            </td>

                                            <td className="px-3 py-2">
                                                {project.name}
                                            </td >

                                            <td className="px-3 py-2">
                                                {project.status}
                                            </td >

                                            <td className="px-3 py-2">
                                                {project.created_at}
                                            </td >

                                            <td className="px-3 py-2">
                                                {project.due_date}
                                            </td >

                                            <td className="px-3 py-2">
                                                {project.createdBy.name}
                                            </td >

                                            <td className="px-3 py-2">
                                            </td >
                                        </tr>
                                    ))}
                                </tbody>
                           </table>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}