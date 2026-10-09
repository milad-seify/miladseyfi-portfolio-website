export const resumeFa = {
  identity: {
    name: 'میلاد سیفی',
    professionalHeadline: 'معمار کلاد و مشاور DevOps',
    summary:
      'مهندس کلاد و مشاور DevOps با تجربه عملی در طراحی، بهره‌برداری و نوسازی پلتفرم‌های OpenStack، Ceph و Kubernetes. دامنه کار شامل زیرساخت چند دیتاسنتری، اتوماسیون پلتفرم، مشاهده‌پذیری، مالکیت سرویس، مستندسازی فنی و منتورینگ است.',
  },
  careerHighlights: {
    'openstack-scale': {
      label: 'مقیاس OpenStack',
      detail: 'نود محاسباتی در زیرساخت چند دیتاسنتری',
    },
    'ceph-scale': {
      label: 'ذخیره‌سازی Ceph',
      detail: 'ذخیره‌سازی توزیع‌شده در چند توپولوژی کلاستر',
    },
    'delivery-improvement': {
      label: 'سرعت چرخه استقرار',
      detail: 'بهبود حاصل از GitOps و CI/CD',
    },
  },
  experience: {
    'greenplus-cloud-engineer': {
      role: 'مهندس کلاد',
      summary:
        'فعالیت در طراحی، بهره‌برداری و نوسازی زیرساخت OpenStack با دسترس‌پذیری بالا، در مقیاس بیش از ۱۰۰ نود محاسباتی و چند موقعیت دیتاسنتری.',
      responsibilities: [
        'طراحی، بهره‌برداری و نوسازی زیرساخت OpenStack شامل Nova، Neutron، Cinder، Glance، Octavia و شبکه OVN.',
        'کار با OpenStack-Ansible و Kolla-Ansible، شامل مهاجرت و نوسازی محیط‌های کلاد قدیمی.',
        'طراحی و بهره‌برداری ذخیره‌سازی Ceph و RBD با معماری‌های سه، پنج و شش نودی، Poolهای SSD و NVMe، نوع‌های Volume در Cinder و QoS ذخیره‌سازی.',
        'کار روی معماری Kubernetes-as-a-Service با Kubernetes، Cluster API، CAPO، Kamaji، ارکستریشن FastAPI، جداسازی Project در OpenStack، Octavia و جریان‌های چرخه عمر کلاستر.',
        'ساخت جریان‌های اتوماسیون و تحویل زیرساخت با Terraform، Ansible، AWX، GitLab خودمیزبان، GitLab CI و رویکردهای GitOps.',
        'کار در حوزه Ironic، MAAS، Proxmox، GPU passthrough، ساخت Image، شبکه L2/L3، VLAN، DHCP relay و معماری شبکه خصوصی و DMZ.',
        'پشتیبانی از مشاهده‌پذیری زیرساخت با Prometheus، Grafana و ELK/EFK، در کنار مالکیت سرویس، Runbook، مستندسازی فنی، منتورینگ و انتقال دانش.',
      ],
      highlights: [
        'مشارکت در ارتقای OpenStack در سه دیتاسنتر و بیش از سه نسخه اصلی، بدون توقف محصول.',
        'بهبودهای GitOps و CI/CD زمان چرخه استقرار را بیش از ۶۰٪ کاهش داد.',
        'مشارکت در راه‌اندازی یک محیط کلاد جدید برای تبیان.',
      ],
      locations: ['مشهد', 'تبریز', 'شیراز', 'تهران'],
    },
  },
  education: {
    'ferdowsi-msc-software-engineering': {
      institution: 'دانشگاه فردوسی مشهد',
      degree: 'کارشناسی ارشد',
      field: 'مهندسی نرم‌افزار',
      status: 'دانشجوی فعلی',
    },
  },
  skillGroups: {
    'private-cloud': {
      title: 'معماری کلاد خصوصی',
      summary:
        'طراحی، نوسازی، برنامه‌ریزی مهاجرت و یکپارچه‌سازی سرویس‌های OpenStack با دسترس‌پذیری بالا.',
    },
    storage: {
      title: 'معماری ذخیره‌سازی',
      summary:
        'طراحی Ceph و RBD با توجه به دامنه خرابی، جداسازی بار کاری، لایه‌های ذخیره‌سازی و اتصال به Cinder.',
    },
    kubernetes: {
      title: 'پلتفرم‌های Kubernetes',
      summary: 'معماری چرخه عمر کلاستر و پلتفرم داخلی روی OpenStack با استفاده از APIهای زیرساخت.',
    },
    automation: {
      title: 'اتوماسیون و تحویل',
      summary: 'تأمین، پیکربندی و تحویل تکرارپذیر زیرساخت با رویکرد منبع حقیقت.',
    },
    infrastructure: {
      title: 'شبکه و تأمین زیرساخت',
      summary: 'شبکه کلاد، توزیع بار، جداسازی Project و مدیریت چرخه عمر Bare Metal.',
    },
    operations: {
      title: 'عملیات و مالکیت',
      summary: 'دید عملیاتی، Runbook، مالکیت سرویس، مستندسازی و انتقال دانش.',
    },
  },
  selectedProjects: {
    'private-cloud-platform': {
      title: 'نوسازی OpenStack چند دیتاسنتری',
      summary: 'نوسازی کنترل‌شده زیرساخت OpenStack با دسترس‌پذیری بالا در چند موقعیت.',
      contributions: [
        'کار در مقیاس بیش از ۱۰۰ نود محاسباتی و سرویس‌های اصلی OpenStack.',
        'مشارکت در ارتقاهای سه دیتاسنتر و بیش از سه نسخه اصلی.',
      ],
      verifiedResult: 'ارتقاهای تحت پوشش بدون توقف محصول تکمیل شدند.',
    },
    'ceph-storage-architecture': {
      title: 'معماری ذخیره‌سازی Ceph برای OpenStack',
      summary:
        'ذخیره‌سازی توزیع‌شده Ceph و RBD با تمرکز بر جداسازی بار کاری، لایه‌های ذخیره‌سازی و دامنه‌های خرابی.',
      contributions: [
        'کار با بیش از ۵۰ ترابایت ذخیره‌سازی توزیع‌شده Ceph.',
        'استفاده از معماری‌های سه، پنج و شش نودی متناسب با نیاز محیط.',
      ],
    },
    'kubernetes-platform': {
      title: 'پلتفرم Kubernetes-as-a-Service',
      summary:
        'معماری پلتفرم داخلی برای اتصال جریان‌های پرتال به مدیریت چرخه عمر Kubernetes روی OpenStack.',
      contributions: [
        'اتصال ارکستریشن FastAPI، آماده‌سازی منابع OpenStack، Cluster API و CAPO.',
        'پشتیبانی از ساخت، مقیاس‌دهی، حذف، شبکه و توزیع بار کلاستر با پیکربندی‌پذیری مناسب.',
      ],
    },
    'infrastructure-automation': {
      title: 'پلتفرم اتوماسیون و عملیات زیرساخت',
      summary:
        'تأمین و عملیات تکرارپذیر با Infrastructure as Code، اتوماسیون مدیریت‌شده و جریان‌های GitOps.',
      contributions: [
        'استفاده از Terraform، Ansible، AWX روی K3s، GitLab خودمیزبان و GitLab CI.',
        'یکپارچه‌سازی Runbook، جریان‌های پشتیبان‌گیری، مستندسازی و مشاهده‌پذیری زیرساخت.',
      ],
      verifiedResult: 'زمان چرخه استقرار بیش از ۶۰٪ کاهش یافت.',
    },
  },
} as const;
