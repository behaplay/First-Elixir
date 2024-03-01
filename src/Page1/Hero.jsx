import { Carousel } from "@material-tailwind/react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function Hero() {
    return (
        <Carousel
            autoplay="true"
            loop
            className="z-0"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="bg-swiper1 bg-cover max-w-[1540px]">
                <div className="container w-full h-[645px] flex items-center justify-between">
                    <Card className="mt-6 w-[650px] bg-transparent flex flex-col gap-10 shadow-none text-[#2A3855] rounded-none">
                        <CardBody className="flex flex-col gap-10">
                            <Typography variant="h5" color="blue-gray" className="mb-2 text-7xl font-black animate-fade-up animate-duration-1000 animate-delay-500">
                                Helping Leaders
                            </Typography>
                            <Typography className=" text-2xl animate-fade-up animate-duration-1000 animate-delay-500">
                                We look forward to help you in taking your company to new height.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 w-full flex gap-5 flex-col md:flex-row">
                            <Button className="flex gap-1 text-white bg-[#2A3855] rounded py-4 w-max">Read More <svg className="w-5 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></Button>
                            <Button className="flex gap-1 text-white rounded py-4 w-max" color="yellow">Contact us <svg className="w-5 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></Button>
                        </CardFooter>
                    </Card>
                    <div className="h-5 w-5"></div>
                </div>
            </div>

            <div className="bg-swiper2 bg-cover">
                <div className="container w-full h-[645px] flex items-center justify-between">
                    <Card className="mt-6 w-[650px] bg-transparent flex flex-col gap-10 shadow-none text-[#2A3855] rounded-none">
                        <CardBody className="flex flex-col gap-10">
                            <Typography variant="h5" color="blue-gray" className="mb-2 text-7xl font-black animate-fade-up animate-duration-1000 animate-delay-500">
                                Helping Leaders
                            </Typography>
                            <Typography className=" text-2xl animate-fade-up animate-duration-1000 animate-delay-500">
                                We look forward to help you in taking your company to new height.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 w-full flex gap-5 flex-col md:flex-row">
                            <Button className="flex gap-1 text-white bg-[#2A3855] rounded py-4 w-max">Read More <svg className="w-5 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></Button>
                            <Button className="flex gap-1 text-white rounded py-4 w-max" color="yellow">Contact us <svg className="w-5 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></Button>
                        </CardFooter>
                    </Card>
                    <div className="h-5 w-5"></div>
                </div>
            </div>
            <div className="bg-swiper3 bg-cover">
                <div className="container w-full h-[645px] flex items-center justify-between">
                    <Card className="mt-6 w-[650px] bg-transparent flex flex-col gap-10 shadow-none text-[#2A3855] rounded-none">
                        <CardBody className="flex flex-col gap-10">
                            <Typography variant="h5" color="blue-gray" className="mb-2 text-7xl font-black animate-fade-up animate-duration-1000 animate-delay-500">
                                Helping Leaders
                            </Typography>
                            <Typography className=" text-2xl animate-fade-up animate-duration-1000 animate-delay-500">
                                We look forward to help you in taking your company to new height.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 w-full flex gap-5 flex-col md:flex-row">
                            <Button className="flex gap-1 text-white bg-[#2A3855] rounded py-4 w-max">Read More <svg className="w-5 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></Button>
                            <Button className="flex gap-1 text-white rounded py-4 w-max" color="yellow">Contact us <svg className="w-5 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></Button>
                        </CardFooter>
                    </Card>
                    <div className="h-5 w-5"></div>
                </div>
            </div>
        </Carousel>
    );
}