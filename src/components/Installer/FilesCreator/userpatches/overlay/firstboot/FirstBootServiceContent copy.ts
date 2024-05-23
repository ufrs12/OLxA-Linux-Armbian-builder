const FirstBootServiceContent = () => `
[Unit]
Description=FirstBoot service
After=network.target
[Service]
ExecStart=/etc/init.d/firstboot.sh
[Install]
WantedBy=multi-user.target
`;

export default FirstBootServiceContent;
