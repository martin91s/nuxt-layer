import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
    return { message: 'hello from layer' }
})