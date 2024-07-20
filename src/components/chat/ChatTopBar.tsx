import { USERS } from '@/db/dummy';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Info, X } from 'lucide-react';
import { useSelectedUser } from '@/store/useSelectedUser';


const ChatTopBar = () => {
    const {selectedUser,setSelectedUser} = useSelectedUser();
    return (
        <div className='flex w-full h-20 p-4 justify-between items-center border-b'>
            <div className='flex gap-2 items-center'>
                <Avatar className="flex justify-center items-center">
                    <AvatarImage
                        src={selectedUser?.image || "/user-placeholder.png"}
                        alt="User Image"
                        className="object-cover rounded-full w-10 h-10" />
                </Avatar>
                <span className='font-medium'>{selectedUser?.name}</span>
            </div>

            <div className='flex gap-2'>
                <Info className="text-muted-foreground cursor-pointer hover:text-primary" />
                <X className="text-muted-foreground cursor-pointer hover:text-primary"
                onClick={() => setSelectedUser(null)} />
            </div>


        </div>
    )
}

export default ChatTopBar
