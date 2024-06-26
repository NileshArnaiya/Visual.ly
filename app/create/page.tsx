// pages/about.js
"use client";
import { Button, CardHeader, Card, CardBody } from '@nextui-org/react';
import { Spacer } from "@nextui-org/spacer";
import { title } from "@/components/primitives";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon';
import { LockIcon } from './LockIcon';
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { celebrities, learningstyles, allLanguagesoftheworld, animationStyles, characters } from "./data";
import { Textarea } from "@nextui-org/react";
export default function CreatePage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className='max-w-1200 w-1200'>
            <Card className="p-4">
                <CardHeader className="text-black font-bold">
                    Welcome to the new learning experience from Visual.ly
                </CardHeader>
                <CardBody className="text-black p-5">
                    Always wanted to visualize what you learn? Always wanted practical examples? In your own Language? In Simple words? In Animation?
                    Try out the AI video creator below to visualize any concept.
                </CardBody>
            </Card>

            <Spacer y={4} />

            <div className="grid grid-cols-2 gap-4 p-1">
                <Card className="p-1">
                    <CardHeader className='font-semibold'>What is a neural network?</CardHeader>
                    <CardBody> Animate in 90s retro style</CardBody>
                </Card>
                <Card className='p-1'>
                    <CardHeader className='font-semibold'>Explain angular momentum</CardHeader>
                    <CardBody> Use Tom cruise to teach me</CardBody>
                </Card>
                <Card className='p-1'>
                    <CardHeader className='font-semibold'>Explain the python program</CardHeader>
                    <CardBody className='p-2'>in simple words in my [Language]</CardBody>
                </Card>
                <Card className='p-0'>
                    <CardHeader className='font-semibold'>Understand SLAM Algorithm</CardHeader>
                    <CardBody>using AI Generated pictures</CardBody>
                </Card>
            </div>

            <Spacer y={5} />

            <div className="flex gap-4 max-w-500">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Celebrity"
                        className="max-w-300 text-emerald-800"
                    >
                        {celebrities.map((celebrity) => (
                            <SelectItem key={celebrity.key}>
                                {celebrity.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Learning Style"
                        className="max-w-xs"
                    >
                        {learningstyles.map((learning) => (
                            <SelectItem key={learning.key}>
                                {learning.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                </div>
                <Spacer y={2} />
                {/* <Spacer y = {5} /> */}
                <div className="flex gap-4 max-w-500">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Language"
                        className="max-w-xs"
                    >
                        {allLanguagesoftheworld.map((language) => (
                            <SelectItem key={language.key}>
                                {language.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Animation Style"
                        className="max-w-xs"
                    >
                        {animationStyles.map((animation) => (
                            <SelectItem key={animation.key}>
                                {animation.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
            <Spacer y={4} />

            <div className="relative group rounded-lg w-164 p-8 max-w-400 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
                >
                    <path
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="none"
                        d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                    ></path>
                </svg>
                <Textarea
                    type="text"
                    className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="What would you like to learn Today?"
                />
            </div>


            <Button onPress={onOpen} className="custom-bg" variant='bordered'>
                <h4 className={title({ color: "black" })}>Visualize</h4></Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}