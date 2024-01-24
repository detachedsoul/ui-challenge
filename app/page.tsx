import SideNavigation from "@/components/SideNavigation";
import Header from "@/components/Header";
import ContentAside from "@/components/ContentAside";
import MainContent from "@/components/MainContent";

const Index = (): JSX.Element => {
    return (
        <>
            <SideNavigation />

            <div className="w-full min-h-screen">
                <Header />

                <main className="p-4 bg-[#fafafa] grid items-start lg:grid-cols-12 gap-4">
                    <MainContent />
                    <ContentAside />
                </main>
            </div>
        </>
    );
};

export default Index;
