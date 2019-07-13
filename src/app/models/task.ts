import { Url } from 'url';
import { District } from './district';

export class Task{
    name: string
    date: Date
    email: Url
    phone: string
    address: string
    message: string
    outstanding: boolean
    completed: boolean
    category: string
    district: string
}