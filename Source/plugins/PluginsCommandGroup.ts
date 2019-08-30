/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { CommandGroup, ICommand } from "@dolittle/tooling.common.commands";

const name = 'plugins';

const description = `Commands related to working with plugins.`;

/**
 * Represents an implementation of {ICommandGroup} for the dolittle create command
 *
 * @export
 * @class CreateCommandGroup
 * @extends {CommandGroup}
 */
export class CreateCommandGroup extends CommandGroup {

    /**
     * Instantiates an instance of {CreateCommandGroup}.
     * @param {ICommand[]} commands
     */
    constructor(commands: ICommand[]) {
        super(name, commands, description, true);
    }
}