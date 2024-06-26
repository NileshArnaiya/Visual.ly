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
                    Welcome to the new way of learning experience from Visual.ly
                </CardHeader>
                <CardBody className="text-black p-5">
                    Try out "Angular momentum using [naruto] in Hindi"
                </CardBody>
            </Card>

            <Spacer y={4} />

            <div className="grid grid-cols-4 gap-4 p-1">
                <Card className="p-2">
                    <CardHeader className='font-semibold'>What is a neural network?</CardHeader>
                    <CardBody> Call Dexter to teach me AI 101</CardBody>
                </Card>
                <Card className='p-2'>
                    <CardHeader className='font-semibold'>It will be your Personal Mentor</CardHeader>
                    <CardBody> Invite Tom cruise to mentor me</CardBody>
                </Card>
                <Card className='p-2'>
                    <CardHeader className='font-semibold'>Explain the python program</CardHeader>
                    <CardBody className='p-2'>This method looks hard, can you simplify it in my own [Language]</CardBody>
                </Card>
                <Card className='p-2'>
                    <CardHeader className='font-semibold'>Understand SLAM Algorithm</CardHeader>
                    <CardBody>I have a robotics assignment coming up, can you explain using just pictures</CardBody>
                </Card>
            </div>

            <Spacer y={5} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 0.3fr)', gap: '0.3rem' }}>
                <Select
                    label="Select a celebrity"
                    className="max-w-xs font-bold"
                    style={{ backgroundColor: 'floralwhite' }}
                >
                    {celebrities.map((celebrity) => (
                        <SelectItem key={celebrity.key}>
                            {celebrity.label}
                        </SelectItem>
                    ))}
                </Select>

                <Select
                    label="Choose a character"
                    className="max-w-xs font-bold"
                    style={{ backgroundColor: 'floralwhite' }}
                >
                    {characters.map((animation) => (
                        <SelectItem key={animation.key}>
                            {animation.label}
                        </SelectItem>
                    ))}
                </Select>

                <Select
                    label="Learning Style"
                    className="max-w-xs font-bold"
                    style={{ backgroundColor: 'floralwhite' }}
                >
                    {learningstyles.map((learning) => (
                        <SelectItem key={learning.key}>
                            {learning.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            <Spacer y={2} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 0.3fr)', gap: '0.28rem' }}>
                <Select
                    label="Select Language"
                    className="max-w-xs font-bold"
                    style={{ backgroundColor: 'floralwhite', maxWidth: '300px' }}
                >
                    {allLanguagesoftheworld.map((language) => (
                        <SelectItem key={language.key}>
                            {language.label}
                        </SelectItem>
                    ))}
                </Select>

                <Select
                    label="Animation Style"
                    className="max-w-xs font-bold"
                    style={{ backgroundColor: 'floralwhite', maxWidth: '300px' }}
                >
                    {animationStyles.map((animation) => (
                        <SelectItem key={animation.key}>
                            {animation.label}
                        </SelectItem>
                    ))}
                </Select>
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
                    style={{ backgroundColor: '#fff', color: 'black', padding: '1rem' }}
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