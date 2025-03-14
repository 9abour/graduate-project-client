import { addCompany } from '@/api/admin/index.api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useAddCompany() {
  const router = useRouter();

  return useMutation({
    mutationFn: addCompany,
    onSuccess: () => {
      toast.success('Company added successfully!');
      router.push('/admin/dashboard');
    },
  });
}
