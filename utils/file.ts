import fs from 'fs/promises';

export const mkdir = async (dir: string): Promise<void> => {
    try {
        await fs.access(dir) ;
    } catch (err) {
        if (err) {
            await fs.mkdir(dir);
        }
    }
}
