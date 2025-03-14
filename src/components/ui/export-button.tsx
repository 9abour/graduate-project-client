'use client';

import api from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { Download } from 'lucide-react';
import React from 'react';

interface ExportButtonProps {
  path: string;
}

const ExportButton = ({ path }: ExportButtonProps) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['export'],
    mutationFn: async () => {
      const response = await api.post(path, {}, { responseType: 'blob' });

      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${path.split('/').join(' ').split('-').join(' ')}.csv`;
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    },
  });

  return (
    <>
      <div className="absolute right-1 top-1 w-full max-w-[200px]">
        <button
          disabled={isPending}
          className="w-full max-w-[200px] h-[48px] flex items-center justify-center gap-2 border-2 mt-auto font-semibold rounded-md border-black/20 hover:bg-gradient-to-r hover:text-black transition bg-white disabled:cursor-not-allowed navbar-shadow"
        ></button>
      </div>

      <div className="absolute right-2 top-2 w-full max-w-[200px] hover:right-1 hover:top-1 transition">
        <button
          disabled={isPending}
          onClick={() => mutateAsync()}
          className="w-full max-w-[200px] h-[48px] flex items-center justify-center gap-2 mt-auto border-2 font-bold border-black/20 rounded-md hover:bg-gradient-to-r hover:text-black transition bg-white disabled:cursor-not-allowed"
        >
          {isPending ? 'Exporting...' : 'Export'} <Download />
        </button>
      </div>
    </>
  );
};

export default ExportButton;
