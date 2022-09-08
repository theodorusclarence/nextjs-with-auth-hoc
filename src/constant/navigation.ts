type Navigation = {
  title: string;
  content: {
    name: string;
    href: string;
  }[];
}[];

export const navigationItem: Navigation = [
  {
    title: 'Laporan',
    content: [
      {
        name: 'Laporan Penerimaan',
        href: '/monitoring/report/acceptance-report',
      },
      {
        name: 'Laporan Kinerja Operator',
        href: '/monitoring/report/performance-report',
      },
    ],
  },
  {
    title: 'Monitoring',
    content: [
      {
        name: 'Statistik Per Wilayah',
        href: '/monitoring/statistik/pendaftaran/wilayah',
      },
      {
        name: 'Statistik Per Sekolah',
        href: '/monitoring/statistik/pendaftaran/sekolah',
      },
      {
        name: 'Verifikasi NIK',
        href: '/monitoring/verifikasi-nik',
      },
      {
        name: 'Permintaan Pembatalan',
        href: '/monitoring/permintaan-pembatalan',
      },
    ],
  },
];
