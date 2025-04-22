import { NextResponse } from "next/server";
import util from 'util';
import db from '../../../../../utils/db';
import bcrypt from 'bcryptjs'; 

const query = util.promisify(db.query).bind(db);

export const POST = async (req) => {
    const user = await req.json();
    
    try {
        if (!user.username || !user.email || !user.password) {
            return new NextResponse('Missing required fields', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Check if any of the optional fields are missing, set them to NULL if not provided
        // const phone = user.phone || null;
        // const type_account = user.type_account || null;
        // const status_account = user.status_account || null;

        // Correct the SQL query to match the number of placeholders with the values provided
        const sql = `
            INSERT INTO task_database (id, username, email, password) 
            VALUES (UUID(), ?, ?, ?)
        `;
        
        const values = [
            user.username,  
            user.email,     
            hashedPassword
        ];
        
        const results = await query(sql, values);

        if (results) {
            return new NextResponse('User registered successfully', { status: 201 });
        }

        return new NextResponse('User registration failed', { status: 500 });

    } catch (error) {
        console.error('Server Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
};
